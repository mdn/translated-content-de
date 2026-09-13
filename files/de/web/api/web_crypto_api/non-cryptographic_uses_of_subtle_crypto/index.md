---
title: Nicht kryptografische Verwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 6f5921b2634db4bd565e5e0cd38eafdadb4bb383
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf Verwendungen der Methode [`digest`](/de/docs/Web/API/SubtleCrypto/digest) des [SubtleCrypto-Interface](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle. Das Erstellen von Hashes für Inhalte (was die Methode `digest` tut) hat hingegen viele sehr nützliche Zwecke.

Dieser Artikel behandelt nicht die kryptografischen Verwendungen des [SubtleCrypto-Interface](/de/docs/Web/API/SubtleCrypto). Eine wichtige Erkenntnis aus diesem Artikel ist: **Verwenden Sie diese API nicht** für kryptografische Zwecke in der Produktion, da sie leistungsfähig und niedrigschwellig ist. Um sie korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte ausführen, um kryptografische Aufgaben richtig zu erledigen. Werden einige dieser Schritte falsch ausgeführt, wird Ihr Code bestenfalls nicht ausgeführt. Schlimmstenfalls _wird_ er ausgeführt, und Sie gefährden Ihre Benutzenden unwissentlich durch ein unsicheres Produkt.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele der Dinge, für die Sie Kryptografie einsetzen möchten, sind bereits gelöst und Teil der Webplattform. Wenn Sie beispielsweise besorgt über [Man-in-the-Middle-Angriffe (MITM)](/de/docs/Web/Security/Attacks/MITM) sind, etwa wenn WLAN-Hotspots die Informationen zwischen Client und Server auslesen, wird dies durch die korrekte Verwendung von {{Glossary("HTTPS", "HTTPS")}} gelöst. Möchten Sie Informationen sicher zwischen Benutzenden senden? Dann können Sie mit [WebRTC Data Channels](/de/docs/Web/API/WebRTC_API/Using_data_channels) eine Datenverbindung zwischen Benutzenden einrichten, die als Teil des Standards verschlüsselt ist.

Das [SubtleCrypto-Interface](/de/docs/Web/API/SubtleCrypto) stellt niedrigschwellige Primitiven für die Arbeit mit Kryptografie bereit, aber die Implementierung eines Systems mit diesen Werkzeugen ist eine komplexe Aufgabe. Fehler sind schwer zu erkennen, und die Folgen können bedeuten, dass die Daten Ihrer Benutzenden nicht so sicher sind, wie Sie denken. Dies kann katastrophale Folgen haben, wenn Ihre Benutzenden sensible oder wertvolle Daten teilen.

Versuchen Sie es im Zweifel nicht selbst, sondern beauftragen Sie jemanden mit Erfahrung und stellen Sie sicher, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Hashing einer Datei

Dies ist das einfachste Nützliche, das Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es erfordert weder das Generieren von Schlüsseln noch von Zertifikaten und besteht aus einem einzigen Schritt.

{{Glossary("Hash_function", "Hashing")}} ist eine Technik, bei der Sie eine lange Bytefolge in eine kürzere Zeichenfolge umwandeln, wobei kleine Änderungen an der langen Zeichenfolge große Änderungen in der kürzeren Zeichenfolge bewirken. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien zu prüfen. Dies ist sehr nützlich, da Sie eine einfache Zeichenfolge zum Vergleichen haben. Wichtig ist: Hashing ist eine **Einwegoperation**. Sie können die ursprüngliche Bytefolge nicht aus dem Hash erzeugen.

Wenn zwei erzeugte Hashes gleich sind, die Dateien, aus denen sie erzeugt wurden, aber unterschiedlich sind, spricht man von einer _Hash-Kollision_. Dies ist ein äußerst unwahrscheinliches Ereignis, wenn es versehentlich passiert, und für eine sichere Hash-Funktion wie SHA256 nahezu unmöglich absichtlich herzustellen. Wenn die beiden Zeichenfolgen also gleich sind, können Sie mit hinreichender Sicherheit davon ausgehen, dass die beiden ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl für das Hashing von Dateien, aber im SubtleCrypto-Interface sind [Hash-Funktionen höherer Ordnung](/de/docs/Web/API/SubtleCrypto#supported_algorithms) verfügbar. Die häufigste Darstellung eines SHA256-Hashs ist eine Zeichenfolge aus 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass nur die Zeichen 0–9 und a–f verwendet werden, die jeweils 4 Bit Information darstellen. Kurz gesagt: Ein SHA256-Hash wandelt Daten beliebiger Länge in fast eindeutige 256 Bit Daten um.

Diese Technik wird häufig von Websites verwendet, auf denen Sie ausführbare Dateien herunterladen können, um sicherzustellen, dass die heruntergeladene Datei der vom Autor vorgesehenen entspricht. Dadurch wird sichergestellt, dass Ihre Benutzenden keine Malware installieren. Die häufigste Vorgehensweise ist:

1. Notieren Sie den Namen der Datei und die von der Website bereitgestellte SHA256-Prüfsumme.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie im Terminal `sha256sum /path/to/the/file` aus, um Ihren eigenen Code zu erzeugen. Wenn Sie einen Mac verwenden, müssen Sie es möglicherweise [separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenfolgen – sie sollten übereinstimmen, sofern die Datei nicht kompromittiert wurde.

![Beispiele für SHA256 aus dem Download der Software „Blender“. Sie sehen aus wie 64 hexadezimale Ziffern, gefolgt von einem Dateinamen wie „blender.zip“.](blender-sha256-example.png)

Die Methode [`digest()`](/de/docs/Web/API/SubtleCrypto/digest) von SubtleCrypto ist hierfür nützlich. Sie können eine Prüfsumme für eine Datei wie folgt erzeugen:

Zunächst fügen wir einige HTML-Elemente hinzu, um Dateien zu laden und die SHA-256-Ausgabe anzuzeigen:

```html
<h3>Demonstration of hashing a file with SHA256</h3>

<label
  >Choose file(s) to hash <input type="file" id="file" name="file" multiple
/></label>
<output></output>
```

```css hidden
output {
  display: block;
  font-family: monospace;
}
```

Anschließend verwenden wir das SubtleCrypto-Interface, um sie zu verarbeiten. Dies funktioniert folgendermaßen:

- Lesen der Dateien in einen {{jsxref("ArrayBuffer")}} mit der Methode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) des [`File`](/de/docs/Web/API/File)-Objekts.
- Verwendung von `crypto.subtle.digest('SHA-256', arrayBuffer)`, um den ArrayBuffer zu hashen.
- Umwandlung des resultierenden Hashs (eines weiteren ArrayBuffer) in eine Zeichenfolge, damit er angezeigt werden kann.

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
  if (uint8ViewOfHash.toHex) {
    // The logic below is equivalent to the toHex() method, introduced in 2025.
    return uint8ViewOfHash.toHex();
  }
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

### Wo würden Sie dies verwenden?

An diesem Punkt denken Sie vielleicht: „_Ich kann dies auf meiner eigenen Website verwenden, damit wir beim Herunterladen einer Datei durch Benutzende sicherstellen können, dass die Hashes übereinstimmen, und sie davon überzeugen, dass ihr Download sicher ist._“ Leider fallen dabei sofort zwei Probleme auf:

- Downloads ausführbarer Dateien sollten **immer** über HTTPS erfolgen. Dies verhindert, dass zwischengeschaltete Parteien solche Angriffe ausführen können, sodass dies redundant wäre.
- Wenn der Angreifer die Download-Datei auf dem ursprünglichen Server ersetzen kann, kann er auch einfach den Code ersetzen, der das SubtleCrypto-Interface aufruft, um es zu umgehen und lediglich anzugeben, dass alles in Ordnung ist. Beispielsweise könnte er heimlich [strikte Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using) ersetzen, was in Ihrem eigenen Code schwer zu erkennen sein kann:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Eine Stelle, an der dies sinnvoll sein kann, ist die Prüfung einer Datei aus einer Download-Quelle eines Drittanbieters, die Sie nicht kontrollieren. Dies wäre möglich, sofern der Download-Ort {{Glossary("CORS", "CORS")}}-Header aktiviert hat, damit Sie die Datei prüfen können, bevor Sie sie Ihren Benutzenden bereitstellen. Leider ist CORS auf nicht vielen Servern standardmäßig aktiviert.

## Was bedeutet „Salting the Hash“?

Ein Ausdruck, den Sie vielleicht schon gehört haben, ist _„Salting the hash“_. Er ist für die hier behandelten Themen nicht unmittelbar relevant, aber es ist gut, ihn zu kennen.

> [!NOTE]
> In diesem Abschnitt geht es um Passwortsicherheit, und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie aufwendige, langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, recht schnell und effizient zu sein, wodurch es für das Hashing von Passwörtern ungeeignet ist. Dieser Abschnitt dient ausschließlich Ihrer Information – verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Ein häufiger Anwendungsfall für Hashing sind Passwörter. Sie sollten das Passwort eines Benutzers niemals im Klartext speichern; das ist schlicht eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Benutzerpassworts, damit das ursprüngliche Passwort nicht wiederhergestellt werden kann, falls ein Hacker Ihre Datenbank mit Benutzernamen und Passwörtern erlangt. Aufmerksame Lesende könnten bemerken, dass Sie die ursprünglichen Passwörter dennoch ermitteln können, indem Sie Hashes aus Listen bekannter Passwörter mit der erlangten Liste von Passwort-Hashes vergleichen. Das Anhängen einer Zeichenfolge an die Passwörter verändert den Hash, sodass er nicht mehr übereinstimmt. Dies wird als **Salting** bezeichnet. Ein weiteres schwieriges Problem besteht darin, dass bei Verwendung desselben Salt für jedes Passwort auch Passwörter mit übereinstimmenden Hashes dasselbe ursprüngliche Passwort haben. Wenn Sie also eines kennen, kennen Sie auch alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, führen Sie das sogenannte _Salting the hash_ durch. Für jedes Passwort erzeugen Sie ein Salt (eine zufällige Zeichenfolge) und verketten es mit der Passwortzeichenfolge. Anschließend speichern Sie den Hash und das Salt in derselben Datenbank, damit Sie eine Übereinstimmung prüfen können, wenn sich der Benutzer später anmeldet. Das bedeutet, dass die Hashes unterschiedlich sind, wenn zwei Benutzende dasselbe Passwort verwenden. Dies ist der Grund, warum Sie eine aufwendige kryptografische Funktion benötigen: Sie soll es zu zeitaufwendig machen, Listen häufiger Passwörter zu verwenden, um die ursprünglichen Passwörter herauszufinden.

## Hash-Tabellen mit SHA

Sie können SHA1 verwenden, um schnell kryptografisch nicht sichere Hashes zu erzeugen. Diese sind äußerst nützlich, um beliebige Daten in einen Schlüssel umzuwandeln, den Sie später nachschlagen können.

Angenommen, Sie möchten eine Datenbank haben, die als eines der Felder einer Zeile einen großen Daten-Blob enthält. Dies verringert die Effizienz Ihrer Datenbank, weil eines der Felder entweder eine variable Länge haben oder groß genug sein muss, um den größtmöglichen Blob zu speichern. Eine alternative Lösung besteht darin, einen Hash des Blobs zu erzeugen und ihn in einer separaten Lookup-Tabelle zu speichern, wobei der Hash als Index verwendet wird. In Ihrer ursprünglichen Datenbank können Sie dann nur den Hash speichern, der eine praktikable feste Länge hat.

Die möglichen Varianten für einen SHA1-Hash sind außerordentlich zahlreich. So zahlreich, dass es nahezu unmöglich ist, versehentlich zwei Blobs mit demselben SHA1-Hash zu erzeugen. Es _ist_ möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erzeugen, da SHA1 kryptografisch nicht sicher ist. Ein böswilliger Benutzer könnte theoretisch einen Daten-Blob erzeugen, der das Original in der Datenbank ersetzt und unentdeckt bleibt, weil der Hash gleich ist. Dies ist ein Angriffsvektor, dessen Sie sich bewusst sein sollten.

## Wie git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein gutes Beispiel: Es verwendet Hashes auf zwei interessante Arten. Wenn Dateien in git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Dadurch kann git die Daten schnell finden und Dateien wiederherstellen.

Es verwendet jedoch nicht nur den Dateiinhalt für den Hash, sondern stellt auch die UTF8-Zeichenfolge `"blob "` voran, gefolgt von der in Dezimaldarstellung geschriebenen Dateigröße in Bytes und dem Nullzeichen (das in JavaScript als `"\0"` geschrieben werden kann). Sie können das [TextEncoder-Interface](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu kodieren, da Zeichenfolgen in JavaScript UTF16 sind.

Der folgende Code kann, wie unser SHA256-Beispiel, verwendet werden, um diese Hashes aus Dateien zu erzeugen. Das HTML zum Hochladen von Dateien bleibt gleich, aber wir führen zusätzliche Schritte aus, um die Größeninformation auf dieselbe Weise wie git voranzustellen.

```html
<h3>Demonstration of how git uses SHA1 for files</h3>

<label
  >Choose file(s) to hash <input type="file" id="file" name="file" multiple
/></label>

<output></output>
```

```css hidden
output {
  display: block;
  font-family: monospace;
}
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

Beachten Sie, wie die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet wird, um den Header zu erzeugen, der mit dem ursprünglichen ArrayBuffer verkettet wird, um die zu hashende Zeichenfolge zu erzeugen.

## Wie git Commit-Hashes erzeugt

Interessanterweise erzeugt git auch Commit-Hashes auf ähnliche Weise, basierend auf mehreren Informationen. Dazu können der Hash des vorherigen Commits und die Commit-Nachricht gehören, die zusammen einen neuen Hash ergeben. Dies kann verwendet werden, um Commits zu referenzieren, die auf mehreren eindeutigen Kennungen basieren.

Der Terminalbefehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [How is git commit sha1 formed](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es die UTF8-Zeichenfolge (das Nullzeichen wird als `\0` geschrieben):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Dies ist hilfreich, da keines der einzelnen Felder garantiert eindeutig ist, sie zusammengenommen jedoch einen eindeutigen Verweis auf einen einzelnen Commit ergeben. Die gesamte Zeichenfolge ist jedoch zu lang und unhandlich für die Verwendung. Durch das Hashing erhalten Sie daher eine neue eindeutige Zeichenfolge, die kurz genug ist, um sie bequem aus mehreren Feldern zu teilen.

Deshalb ändert sich der Hash, wenn Sie Ihren Commit jemals geändert haben, selbst wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, und selbst eine Änderung um ein einzelnes Zeichen reicht aus, um den neuen Hash vollständig zu verändern.

Die wichtigste Erkenntnis daraus ist: Wenn Sie Daten einen Schlüssel hinzufügen möchten, aber keine einzelne Information eindeutig genug ist, dann ist das Verketten mehrerer Zeichenfolgen und anschließende Hashing eine hervorragende Möglichkeit, einen nützlichen Schlüssel zu erzeugen.

Hoffentlich haben diese Beispiele Sie dazu ermutigt, sich diese neue leistungsfähige API anzusehen. Denken Sie daran: Versuchen Sie nicht, kryptografische Verfahren selbst nachzubauen. Es genügt zu wissen, dass die Werkzeuge vorhanden sind und dass einige davon, etwa die Funktion [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest), nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
