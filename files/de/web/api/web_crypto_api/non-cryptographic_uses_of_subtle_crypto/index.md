---
title: Nicht-kryptografische Anwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Verwendung der [`digest`]-Methode(/de/docs/Web/API/SubtleCrypto/digest) der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle, während das Erstellen von Hashes von Inhalten (was die Digest-Methode tut) zahlreiche nützliche Zwecke hat.

Dieser Artikel behandelt nicht die kryptografischen Anwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt, den Sie aus diesem Artikel mitnehmen sollten, ist **verwenden Sie diese API nicht** für produktiven kryptografischen Gebrauch, da sie leistungsfähig und auf niedriger Ebene ist. Um sie richtig zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben korrekt auszuführen. Wenn einer dieser Schritte falsch ausgeführt wird, wird Ihr Code im besten Fall nicht ausgeführt, im schlimmsten Fall _wird_ er ausgeführt und Sie setzen Ihre Benutzer unwissentlich einem Risiko mit einem unsicheren Produkt aus.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele der Dinge, für die Sie Kryptographie verwenden möchten, sind bereits gelöst und Teil der Webplattform. Zum Beispiel, wenn Sie sich über Man-in-the-Middle-Angriffe Sorgen machen, wie zum Beispiel, dass WLAN-Hotspots die Informationen zwischen dem Client und dem Server lesen, ist dies durch die korrekte Verwendung von {{Glossary("HTTPS", "HTTPS")}} gelöst. Möchten Sie Informationen sicher zwischen Benutzern senden? Dann können Sie eine Datenverbindung zwischen Benutzern mit [WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die als Teil des Standards verschlüsselt ist.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet elementare Werkzeuge für die Arbeit mit Kryptographie, aber die Implementierung eines Systems mit diesen Tools ist eine komplizierte Aufgabe. Fehler sind schwer zu bemerken und die Ergebnisse können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies kann katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten austauschen.

Im Zweifelsfall versuchen Sie nicht, es selbst zu tun, sondern beauftragen Sie jemanden mit Erfahrung und stellen Sie sicher, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Hashing einer Datei

Dies ist das einfachste nützliche, das Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es erfordert weder das Generieren von Schlüsseln noch von Zertifikaten und hat nur einen einzigen Schritt.

{{Glossary("Hash_function", "Hashing")}} ist eine Technik, bei der Sie eine große Zeichenfolge von Bytes in eine kleinere Zeichenfolge umwandeln, wobei kleine Änderungen an der langen Zeichenfolge zu großen Änderungen in der kleineren Zeichenfolge führen. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien überprüfen zu müssen. Dies ist sehr nützlich, da Sie eine einfache Zeichenfolge zum Vergleichen haben. Um klarzustellen, Hashing ist eine **Einwegoperation**. Sie können die ursprüngliche Zeichenfolge von Bytes nicht aus dem Hash generieren.

Wenn zwei generierte Hashes gleich sind, die Dateien, die sie verwendet haben, um sie zu generieren, jedoch unterschiedlich sind, ist dies als _Hash-Kollision_ bekannt, was extrem unwahrscheinlich ist, um zufällig zu passieren, und für eine sichere Hash-Funktion wie SHA256 nahezu unmöglich herzustellen. Wenn also die beiden Zeichenfolgen gleich sind, können Sie hinreichend sicher sein, dass die beiden ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl zum Hashen von Dateien, aber es gibt [höherwertige Hash-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms) in der SubtleCrypto-Schnittstelle. Die häufigste Darstellung eines SHA256-Hashes ist eine Zeichenfolge von 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass sie nur die Zeichen 0-9 und a-f verwendet, die 4 Bit Informationen darstellen. Kurz gesagt, ein SHA256-Hash verwandelt eine beliebige Datenlänge in nahezu einzigartige 256 Bit Daten.

Diese Technik wird häufig von Seiten verwendet, die Ihnen ermöglichen, ausführbare Dateien herunterzuladen, um sicherzustellen, dass die heruntergeladene Datei mit der übereinstimmt, die der Autor vorgesehen hat. Dies stellt sicher, dass Ihre Benutzer keine Malware installieren. Die häufigste Methode dazu ist:

1. Notieren Sie den Dateinamen und die vom Website angegebenen SHA256-Prüfsumme.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /Pfad/zur/Datei` im Terminal aus, um Ihren eigenen Code zu generieren. Wenn Sie einen Mac verwenden, müssen Sie möglicherweise [es separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die zwei Zeichenfolgen - sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele von SHA256 aus dem Download für die Software "Blender". Diese sehen aus wie 64 hexadezimale Ziffern, gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist dafür nützlich. Um eine Prüfsumme einer Datei zu erstellen, können Sie es so machen:

Zuerst fügen wir einige HTML-Elemente zum Laden von Dateien und Anzeigen der SHA-256-Ausgabe hinzu:

```html
<h3>Demonstration of hashing a file with SHA256</h3>

<label
  >Choose file(s) to hash <input type="file" id="file" name="file" multiple
/></label>
<output style="display:block;font-family:monospace;"></output>
```

Dann verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert durch:

- Lesen der Dateien in ein {{jsxref("ArrayBuffer")}} mit der [`File`](/de/docs/Web/API/File)-Objekt-Methode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer).
- Verwendung von `crypto.subtle.digest('SHA-256', arrayBuffer)`, um den ArrayBuffer zu hashen
- Umwandlung des resultierenden Hashes (ein weiterer ArrayBuffer) in eine Zeichenfolge, damit er angezeigt werden kann

```js
const output = document.querySelector("output");
const file = document.getElementById("file");

// Run the hashing function when the user selects one or more file
file.addEventListener("change", hashTheseFiles);

// The digest function is asynchronous, it returns a promise
// We use the async/await syntax to simplify the code.
async function fileHash(file) {
  const arrayBuffer = await file.arrayBuffer();

  // Use the subtle crypto API to perform a SHA256 Sum of the file's
  // Array Buffer. The resulting hash is stored in an array buffer
  const hashAsArrayBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);

  // To display it as a string we will get the hexadecimal value of
  // each byte of the array buffer. This gets us an array where each byte
  // of the array buffer becomes one item in the array
  const uint8ViewOfHash = new Uint8Array(hashAsArrayBuffer);
  // We then convert it to a regular array so we can convert each item
  // to hexadecimal strings, where characters of 0-9 or a-f represent
  // a number between 0 and 15, containing 4 bits of information,
  // so 2 of them is 8 bits (1 byte).
  const hashAsString = Array.from(uint8ViewOfHash)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashAsString;
}

async function hashTheseFiles(e) {
  let outHTML = "";
  // iterate over each file in file select input
  for (const file of this.files) {
    // calculate its hash and list it in the output element.
    outHTML += `${file.name}    ${await fileHash(file)}\n`;
  }
  output.innerText = outHTML;
}
```

{{EmbedLiveSample("hashing_a_file")}}

### Wo würden Sie das verwenden?

An diesem Punkt denken Sie vielleicht "_Ich kann das auf meiner eigenen Website verwenden, damit wir beim Herunterladen einer Datei sicherstellen können, dass die Hashes übereinstimmen, um den Benutzer zu beruhigen, dass ihr Download sicher ist_". Leider hat dies zwei Probleme, die sofort ins Auge fallen:

- Downloads von ausführbaren Dateien sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Zwischenparteien Angriffe wie diesen ausführen, sodass es überflüssig wäre.
- Wenn der Angreifer in der Lage ist, die Download-Datei auf dem Originalserver zu ersetzen, kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um sie zu umgehen und einfach zu sagen, dass alles in Ordnung ist. Wahrscheinlich etwas Heimliches wie das Ersetzen der [strikten Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu erkennen ist:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sich lohnen könnte, ist, wenn Sie eine Datei von einer Drittanbieter-Downloadquelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Standort {{Glossary("CORS", "CORS")}}-Header aktiviert hat, damit Sie die Datei prüfen können, bevor Sie sie Ihren Benutzern zur Verfügung stellen. Leider haben nicht viele Server CORS standardmäßig aktiviert.

## Was bedeutet "Salzen des Hashes"?

Ein Ausdruck, den Sie vielleicht schon einmal gehört haben, ist _"Salzen des Hashes"_. Es ist nicht sofort relevant für unsere aktuellen Themen, aber es ist gut, darüber Bescheid zu wissen.

> [!NOTE]
> Dieser Abschnitt spricht über Passwortsicherheit und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure, langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, ziemlich schnell und effizient zu sein, was es für Passwort-Hashing ungeeignet macht. Dieser Abschnitt ist nur zu Ihrem Interesse — verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Ein beliebter Anwendungsfall für Hashing ist Passwörter, Sie möchten niemals das Passwort eines Benutzers im Klartext speichern, das ist einfach eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Benutzerpassworts, sodass das ursprüngliche Passwort nicht wiederhergestellt werden kann, falls ein Hacker Ihre Benutzer- und Passwortdatenbank erhält. Die aufmerksamen unter Ihnen könnten bemerken, dass Sie die ursprünglichen Passwörter immer noch herausfinden können, indem Sie die Hashes mit Listen bekannter Passwörter gegen die erhaltene Passwort-Hash-Liste vergleichen. Das Anhängen einer Zeichenfolge an die Passwörter ändert den Hash so, dass er nicht mehr übereinstimmt. Dies ist als **Salzen** bekannt. Ein weiteres kniffliges Problem ist, wenn Sie dasselbe Salz für jedes Passwort verwenden, dann haben Passwörter mit passenden Hashes auch das gleiche ursprüngliche Passwort. Wenn Sie also eines kennen, kennen Sie alle passenden Passwörter.

Um dieses Problem zu lösen, führen Sie das sogenannte _Salzen des Hashes_ durch. Für jedes Passwort generieren Sie ein Salz (eine zufällige Zeichenfolge) und verketten es mit der Passwortzeichenfolge. Anschließend speichern Sie den Hash und das Salz in derselben Datenbank, damit Sie beim späteren Einloggen des Benutzers auf Übereinstimmung prüfen können. Dies bedeutet, dass wenn zwei Benutzer dasselbe Passwort verwenden, die Hashes unterschiedlich sind. Daher benötigen Sie eine teure kryptografische Funktion, damit es zu zeitaufwändig ist, Listen von üblichen Passwörtern zu verwenden, um herauszufinden, was die ursprünglichen Passwörter waren.

## Hash-Tabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht-kryptografisch sichere Hashes zu generieren. Diese sind unglaublich nützlich, um einige beliebige Daten in einen Schlüssel umzuwandeln, auf den Sie später zugreifen können.

Beispielsweise, wenn Sie eine Datenbank haben möchten, die ein großes Datenblob als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, da eines der Felder entweder variabler Länge sein oder groß genug sein muss, um das größtmögliche Blob zu speichern. Eine alternative Lösung besteht darin, einen Hash des Blobs zu generieren und ihn in einer separaten Nachschlagetabelle unter Verwendung des Hashes als Index zu speichern. Dann können Sie nur den Hash in Ihrer ursprünglichen Datenbank speichern, was eine schöne feste Länge ist.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es fast unmöglich ist, zufällig zwei Blobs mit demselben SHA1-Hash zu erzeugen. Es _ist_ möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erzeugen, weil SHA1 kryptografisch nicht sicher ist. Ein böswilliger Benutzer könnte theoretisch ein Datenblob erzeugen, das das Original in der Datenbank ersetzt, was unbemerkt bleibt, weil der Hash derselbe ist. Dies ist ein Angriffsvektor, über den Sie sich bewusst sein sollten.

## Wie git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein großartiges Beispiel. Es verwendet Hashes auf zwei interessante Arten. Wenn Dateien in git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Dies ermöglicht es git, die Daten schnell zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Dateiinhalt für den Hash, sondern es wird ihm auch die UTF8-Zeichenfolge `"blob "` vorangestellt, gefolgt von der Dateigröße in Bytes, geschrieben in Dezimalzahlen, gefolgt vom Null-Zeichen (das in JavaScript als `"\0"` geschrieben werden kann). Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu kodieren, da Zeichenfolgen in JavaScript UTF16 sind.

Der folgende Code, wie unser SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu generieren. Das HTML zum Hochladen von Dateien bleibt gleich, aber wir machen zusätzliche Arbeit, um die Größeninformationen auf dieselbe Weise wie git hinzuzufügen.

```html
<h3>Demonstration of how git uses SHA1 for files</h3>

<label
  >Choose file(s) to hash <input type="file" id="file" name="file" multiple
/></label>

<output style="display:block;font-family:monospace;"></output>
```

```js
const output = document.querySelector("output");
const file = document.getElementById("file");
file.addEventListener("change", hashTheseFiles);

async function fileHash(file) {
  const arrayBuffer = await file.arrayBuffer();

  // Git prepends the null terminated text 'blob 1234' where 1234
  // represents the file size before hashing so we are going to reproduce that

  // first we work out the Byte length of the file
  const uint8View = new Uint8Array(arrayBuffer);
  const length = uint8View.length;

  // Git in the terminal uses UTF8 for its strings; the Web uses UTF16.
  // We need to use an encoder because different binary representations
  // of the letters in our message will result in different hashes
  const encoder = new TextEncoder();
  // Null-terminated means the string ends in the null character which
  // in JavaScript is '\0'
  const view = encoder.encode(`blob ${length}\0`);

  // We then combine the 2 Array Buffers together into a new Array Buffer.
  const newBlob = new Blob([view.buffer, arrayBuffer], {
    type: "text/plain",
  });
  const arrayBufferToHash = await newBlob.arrayBuffer();

  // Finally we perform the hash this time as SHA1 which is what Git uses.
  // Then we return it as a string to be displayed.
  return hashToString(await crypto.subtle.digest("SHA-1", arrayBufferToHash));
}

function hashToString(arrayBuffer) {
  const uint8View = new Uint8Array(arrayBuffer);
  return Array.from(uint8View)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// like before we iterate over the files
async function hashTheseFiles(e) {
  let outHTML = "";
  for (const file of this.files) {
    outHTML += `${file.name}    ${await fileHash(file)}\n`;
  }
  output.innerText = outHTML;
}
```

{{EmbedLiveSample("how-git-stores-files")}}

Beachten Sie, wie die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet wird, um den Header zu erzeugen, der mit dem ursprünglichen ArrayBuffer verkettet wird, um die Zeichenfolge zu erzeugen, die gehasht werden soll.

## Wie git Commit-Hashes generiert

Interessanterweise generiert git auch Commit-Hashes auf ähnliche Weise, basierend auf mehreren Informationsstücken. Diese können den vorherigen Commit-Hash und die Commit-Nachricht beinhalten, die zusammenkommen, um einen neuen Hash zu erzeugen. Dieser kann verwendet werden, um auf Commits zu verweisen, die auf mehreren eindeutigen Identifikatoren basieren.

Der Terminal-Befehl ist: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [Wie wird der git commit sha1 gebildet](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es die UTF8-Zeichenfolge (Null-Zeichen geschrieben als `\0`):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Das ist großartig, weil keines der einzelnen Felder garantiert einzigartig ist, aber wenn sie zusammengefügt werden, geben sie einen eindeutigen Zeiger auf einen einzelnen Commit. Allerdings ist die ganze Zeichenfolge zu lang und unhandlich, um sie zu verwenden. Durch das Hashen erhalten Sie eine neue eindeutige Zeichenfolge, die kurz genug ist, um bequem aus mehreren Feldern geteilt zu werden.

Dies ist der Grund, warum sich der Hash ändert, wenn Sie jemals Ihren Commit geändert haben, selbst wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, was, selbst mit einem einzigen Zeichen, ausreicht, um den neuen Hash vollständig zu verändern.

Die Lektion daraus ist, dass wenn Sie einen Schlüssel zu einigen Daten hinzufügen möchten, aber jedes einzelne Informationsstück nicht einzigartig genug ist, dann ist das Verketten mehrerer Zeichenfolgen und ihr Hashing eine großartige Möglichkeit, einen nützlichen Schlüssel zu erzeugen.

Hoffentlich haben diese Beispiele Sie ermutigt, sich diese neue leistungsstarke API anzusehen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst zu rekonstruieren. Es reicht aus zu wissen, dass die Werkzeuge da sind und dass einige von ihnen, wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion, nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
