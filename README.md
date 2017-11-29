# Usage

1. `git clone https://github.com/rogeliog/fs-write-weird-issue && cd fs-write-weird-issue`
2. `node index.js` index.js is a file that continously writes to the 100 files in the fixtures folder.
3. _In another terminal_ run several times `git status` or `git diff`
    - You should see some changes every now and then
4. run `ctrl-c` in the `node` process
5. you should now be in a clean git tree again

![repro-fs-write](https://user-images.githubusercontent.com/574806/33360724-d50817fa-d489-11e7-9315-25e0021ab644.gif)

