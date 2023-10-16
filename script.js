

const sleep = (seconds) => {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  };
  
  const showHack = async (message) => {
    await sleep(2);
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
  };
  
  (async () => {
    let p = prompt('Enter Username');
    if (!p) {
      p = 'Anonymous';
    }
  
    const hack = [
      'Ready for Hacking.....',
      'Enter the given command in the panel.....',
      '***************************...........',
      'Username searching........ ????',
      `Fetched user : ${p}`,
      'Initializing..... all data',
      'Data initialized.....',
      'Bank password searching........',
      'Fetched all account details.....',
      `You are gone ${p} ....... `,
      'Transferring bank balance ********',
      'Transferred all bank balance ......',
      'MISSION SUCCESSFUL !!!!!!!!',
    ];
  
    for (let i = 0; i < hack.length; i++) {
      await showHack(hack[i]);
    }
  })();
   



