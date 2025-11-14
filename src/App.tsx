import { useState } from 'react'
import './App.css'

// 17:30

type PoseType = 'Rock' | 'Paper' | 'Scissors' | null

function App() {
  const [yourPose, setYourPose] = useState<PoseType>(null)
  const [cpuPose, setCpuPose] = useState<PoseType>(null)
  const [yourWin, setYourWin] = useState(0)
  const [cpuWin, setCpuWin] = useState(0)
  const [result, setResult] = useState<string | null>(null)

  const selectRock = () => {
    const you = 'Rock'
    const cpu = conputeCpuPose()

    setYourPose(you)
    setCpuPose(cpu)
    setResult(judgeResult({ yourPose: you, cpuPose: cpu }))
  }

  const selectScissors = () => {
    const you = 'Scissors'
    const cpu = conputeCpuPose()

    setYourPose('Scissors')
    setCpuPose(conputeCpuPose())
    setResult(judgeResult({ yourPose: you, cpuPose: cpu }))
  }

  const selectPaper = () => {
    const you = 'Paper'
    const cpu = conputeCpuPose()

    setYourPose('Paper')
    setCpuPose(conputeCpuPose())
    setResult(judgeResult({ yourPose: you, cpuPose: cpu }))
  }

  const conputeCpuPose = () => {
    const origin = Math.floor(Math.random() * 3)
    if (origin === 2) return 'Rock'
    if (origin === 1) return 'Scissors'
    return 'Paper'
  }

  const judgeResult = ({
    yourPose,
    cpuPose,
  }: {
    yourPose: PoseType
    cpuPose: PoseType
  }) => {
    if (yourPose === cpuPose) {
      return 'DRAW'
    }
    if (
      (yourPose === 'Rock' && cpuPose === 'Scissors') ||
      (yourPose === 'Scissors' && cpuPose === 'Paper') ||
      (yourPose === 'Paper' && cpuPose === 'Rock')
    ) {
      setYourWin((prev) => prev + 1)
      return 'WIN'
    }
    setCpuWin((prev) => prev + 1)
    return 'LOSE'
  }

  return (
    <>
      <div className="flex flex-col justify-between w-max h-max gap-10">
        <div className="w-80 flex flex-col gap-2">
          <h1>{`結果：${result ? result : '・'}`}</h1>
          <div className="flex flex-row justify-between gap-2">
            <span>{`あなたの勝ち数:${yourWin}`}</span>
            <span>{`あいての勝ち数:${cpuWin}`}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-7">
          <DisplayPose pose={yourPose} />
          <DisplayPose pose={cpuPose} isCpu />
        </div>
        <div className="flex  flex-row justify-between">
          <button onClick={selectRock}>✊</button>
          <button onClick={selectScissors}>✌</button>
          <button onClick={selectPaper}>✋</button>
        </div>
      </div>
    </>
  )
}

export default App

type poseText = {
  pose: PoseType
  isCpu?: boolean
}
const DisplayPose = (props: poseText) => {
  const { pose, isCpu } = props
  return (
    <>
      <div>
        <span className="text-xl">{isCpu ? 'あいて' : 'あなた'}</span>
        <div className="w-32 h-32 text-8xl border-4 flex justify-center">
          <span>
            {pose === 'Rock'
              ? '✊'
              : pose === 'Scissors'
                ? '✌'
                : pose === 'Paper'
                  ? '✋'
                  : '❓'}
          </span>
        </div>
      </div>
    </>
  )
}
