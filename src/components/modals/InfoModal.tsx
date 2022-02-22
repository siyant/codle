import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Wordle for programmers!
        <br />
        The answer is a programming-related word with length &ge;4 and &le;8.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" status="correct" />
        <Cell value="A" status="absent" />
        <Cell value="T" status="absent" />
        <Cell value="A" status="absent" />
        <Cell value="B" status="present" />
        <Cell value="A" status="absent" />
        <Cell value="S" status="absent" />
        <Cell value="E" status="present" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the correct spot.
        <br />B and E are in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" status="correct" />
        <Cell value="O" status="absent" />
        <Cell value="G" status="present" />
        <Cell value="S" status="absent" />
        <Cell value=" " status="absent" />
        <Cell value=" " status="correct" />
        <Cell value=" " status="correct" />
        <Cell value=" " status="correct" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        You can guess normal English words too.
        <br />
        This result means that the answer is 5 letters long (3 correct blank
        spaces).
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" status="correct" />
        <Cell value="E" status="correct" />
        <Cell value="B" status="correct" />
        <Cell value="U" status="correct" />
        <Cell value="G" status="correct" />
        <Cell value=" " status="correct" />
        <Cell value=" " status="correct" />
        <Cell value=" " status="correct" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        DEBUG is the correct answer!
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
