export async function PostFormInfo(subject, body) {
    await fetch('https://mentaserver-kidandcat.mentasystems.now.sh/api/mail', {
        method: 'POST',
        body: JSON.stringify({ subject: subject, body: body })
    })
}