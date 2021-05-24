This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development Instructions

Below resources are used for developing the app. Please read through the same

- [Material-UI Library](https://material-ui.com) - Use controls from Material-UI library.
- [Flex Library](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Application layout would be flex by default.

1. Create components in /components in folder
2. Create pages in /pages folder
3. Mock data is available through /api/ folder
4. Mobile First Development: Target for iPhone X form factor ( 74 x 812 px). Use Chrome Dev Tools to simulate phone form factor

## Starting new feature develpoment - DO THIS WITH OUT FAIL

1. git checkout master
2. git pull
3. git checkout -b feature/<<your-feature-name>> E.g git checkout -b feature/login-page
4. git status >> Confirm that you are in new branch

Once you've created a new branch as above, you can start developing the feature

5. Develop code in Visual studio code
6. Once completed, execute below commands ( or use Visual Studio plugin) to check in the code
7. git add .
8. git commit -m "my-message for commit" E.g git commit -m "login ui developed"
9. git push

Recommended you do the above checkin as frequent as possible so git server has your latest code

## Deployment Instructions

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the result.
