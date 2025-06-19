---
title: Nicht-kryptografische Verwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Verwendung der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle. Hashes von Inhalten zu erstellen (was die `digest`-Methode tut) hat viele sehr nützliche Zwecke.

Dieser Artikel bespricht nicht die kryptografischen Verwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt, den Sie aus diesem Artikel mitnehmen sollten, ist, **verwenden Sie diese API nicht** für kryptografische Zwecke in Produktionsumgebungen, da sie leistungsstark und niedrigstufig ist. Um sie korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben richtig zu bewältigen. Wenn einer dieser Schritte falsch ausgeführt wird, wird im besten Fall Ihr Code nicht ausgeführt; im schlimmsten Fall wird er ausgeführt und Sie setzen Ihre Benutzer unwissentlich einem Risiko durch ein unsicheres Produkt aus.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele der Dinge, für die Sie Kryptografie verwenden möchten, sind bereits gelöst und Teil der Webplattform. Wenn Sie sich beispielsweise Sorgen über Man-in-the-Middle-Angriffe machen, wie z.B. das Auslesen von Informationen zwischen dem Client und dem Server durch Wi-Fi-Hotspots, kann dies durch die korrekte Verwendung von [HTTPS](/de/docs/Glossary/HTTPS) gelöst werden. Möchten Sie sicher Informationen zwischen Benutzern übertragen? Dann können Sie eine Datenverbindung zwischen Benutzern über [WebRTC Data Channels](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die als Teil des Standards verschlüsselt ist.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet niedrigstufige Primitive für die Arbeit mit Kryptografie, aber die Implementierung eines Systems mit diesen Werkzeugen ist eine komplizierte Aufgabe. Fehler sind schwer zu erkennen und die Ergebnisse können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten austauschen.

Im Zweifelsfall versuchen Sie nicht, es selbst zu tun, sondern stellen Sie jemanden mit Erfahrung ein und sorgen Sie dafür, dass Ihre Software von einem Sicherheitsexperten überprüft wird.

## Hashen einer Datei

Das ist das einfachste, nützliche, was Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es erfordert nicht die Generierung von Schlüsseln oder Zertifikaten und besteht nur aus einem Schritt.

[Hashing](/de/docs/Glossary/Hash_function) ist eine Technik, bei der Sie eine große Zeichenfolge von Bytes in eine kleinere Zeichenfolge umwandeln, wobei kleine Änderungen an der langen Zeichenfolge zu großen Änderungen in der kleineren führen. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien überprüfen zu müssen. Dies ist sehr nützlich, da Sie eine einfache Zeichenfolge zum Vergleichen haben. Um es klarzustellen: Hashing ist eine **Einbahnstraße**. Sie können die ursprüngliche Zeichenfolge von Bytes aus dem Hash nicht rekonstruieren.

Wenn zwei generierte Hashes gleich sind, die Dateien, mit denen sie erzeugt wurden, jedoch unterschiedlich sind, spricht man von einem _Hash-Kollision_ –, was äußerst unwahrscheinlich ist, durch Zufall zu passieren, und für eine sichere Hash-Funktion wie SHA256 fast unmöglich, herzustellen. Wenn also die beiden Zeichenfolgen gleich sind, können Sie sich ziemlich sicher sein, dass die beiden ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl für das Hashen von Dateien, aber es gibt [höherwertige Hash-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms) in der SubtleCrypto-Schnittstelle. Die häufigste Darstellung eines SHA256-Hashes ist eine Zeichenkette mit 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass es nur die Zeichen 0-9 und a-f verwendet, die 4 Bits Information darstellen. Kurz gesagt, ein SHA256-Hash verwandelt beliebige Datenlängen in fast eindeutige 256 Bits Daten.

Diese Technik wird oft von Websites verwendet, die Ihnen erlauben, ausführbare Dateien herunterzuladen, um sicherzustellen, dass die heruntergeladene Datei mit der vom Autor beabsichtigten übereinstimmt. Dies stellt sicher, dass Ihre Benutzer keine Malware installieren. Die häufigste Methode, dies zu tun, ist:

1. Notieren Sie den Dateinamen und die SHA256-Checksumme, die von der Website bereitgestellt wird.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /path/to/the/file` im Terminal aus, um Ihren eigenen Code zu generieren. Wenn Sie einen Mac verwenden, müssen Sie möglicherweise [es separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenfolgen – sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele für SHA256 aus dem Download der Software "Blender". Diese sehen aus wie 64 Hexadezimalziffern, gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`-Methode](/de/docs/Web/API/SubtleCrypto/digest) von SubtleCrypto ist dafür nützlich. Um eine Prüfsumme einer Datei zu erstellen, können Sie es folgendermaßen tun:

Zuerst fügen wir einige HTML-Elemente zum Laden von Dateien und zum Anzeigen der SHA-256-Ausgabe hinzu:

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

Als nächstes verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert, indem:

- Die Dateien in ein {{jsxref("ArrayBuffer")}} mit der [`File`](/de/docs/Web/API/File)-Objekt-Methode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) gelesen werden.
- Verwenden von `crypto.subtle.digest('SHA-256', arrayBuffer)` zum Erstellen des Hash aus dem ArrayBuffer
- Konvertieren des resultierenden Hashes (ein weiteres ArrayBuffer) in eine Zeichenfolge, damit es angezeigt werden kann

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

### Wo würden Sie dies verwenden?

An diesem Punkt denken Sie vielleicht: "_Ich kann dies auf meiner eigenen Website verwenden, damit wir, wenn Benutzer eine Datei herunterladen, sicherstellen können, dass die Hashes übereinstimmen, um den Benutzer zu beruhigen, dass der Download sicher ist_". Leider gibt es zwei Probleme, die sofort in den Sinn kommen:

- Ausführbare Downloads sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Zwischenparteien Angriffe dieser Art ausführen, sodass es überflüssig wäre.
- Wenn der Angreifer die heruntergeladene Datei auf dem ursprünglichen Server ersetzen kann, kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um sie zu umgehen und einfach anzugeben, dass alles in Ordnung ist. Wahrscheinlich etwas Heimliches wie das Ersetzen von [strikter Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu entdecken ist:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sinnvoll sein könnte, ist, wenn Sie eine Datei von einer Drittanbieter-Downloadquelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Standort [CORS](/de/docs/Glossary/CORS)-Header aktiviert hat, um Ihnen das Scannen der Datei zu ermöglichen, bevor Sie sie Ihren Benutzern zur Verfügung stellen. Leider haben nicht viele Server standardmäßig CORS aktiviert.

## Was bedeutet "Salt the Hash"?

Ein Ausdruck, den Sie vielleicht schon einmal gehört haben, ist _"Salt the Hash"_. Es ist nicht sofort relevant für unsere aktuellen Themen, aber es ist gut, davon zu wissen.

> [!NOTE]
> Dieser Abschnitt spricht über Passwortsicherheit und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, ziemlich schnell und effizient zu sein, was es ungeeignet für das Hashen von Passwörtern macht. Dieser Abschnitt dient ausschließlich Ihrem Interesse – verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Ein beliebter Anwendungsfall für das Hashing sind Passwörter. Sie möchten niemals das Passwort eines Benutzers im Klartext speichern – es ist einfach eine furchtbare Idee. Stattdessen speichern Sie einen Hash des Passworts des Benutzers, sodass das ursprüngliche Passwort nicht wiederhergestellt werden kann, falls ein Hacker Ihre Datenbank mit Benutzernamen und Passwörtern erlangt. Die aufmerksamen unter Ihnen bemerken vielleicht, dass Sie immer noch die ursprünglichen Passwörter herausfinden können, indem Sie die Hashes von Listen bekannter Passwörter mit der erlangten Passwort-Hashliste vergleichen. Das Anhängen einer Zeichenfolge an die Passwörter ändert den Hash, sodass er nicht mehr übereinstimmt. Dies ist als **salting** bekannt. Ein weiteres kniffliges Problem ist, wenn Sie dasselbe Salt für jedes Passwort verwenden, dass Passwörter mit übereinstimmenden Hashes auch das gleiche ursprüngliche Passwort sein werden. Daher, wenn Sie eines kennen, kennen Sie alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, führen Sie durch, was als _salting the hash_ bekannt ist. Für jedes Passwort generieren Sie ein Salt (eine zufällige Zeichenfolge) und verknüpfen es mit der Passwortzeichenfolge. Sie speichern dann den Hash und das Salt in derselben Datenbank, damit Sie bei zukünftigen Anmeldungen des Benutzers einen Abgleich durchführen können. Dies bedeutet, dass, wenn zwei Benutzer dasselbe Passwort verwenden, die Hashes unterschiedlich sind. Deshalb benötigen Sie eine teure kryptografische Funktion, damit es zu zeitaufwendig wird, um Listen mit gängigen Passwörtern zu verwenden, um herauszufinden, was die ursprünglichen Passwörter waren.

## Hash-Tabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht-kryptografisch sichere Hashes zu erzeugen. Diese sind unglaublich nützlich, um einige beliebige Daten in einen Schlüssel zu verwandeln, den Sie später nachschlagen können.

Zum Beispiel, wenn Sie eine Datenbank haben möchten, die ein großes Datenblob als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, weil eines der Felder entweder variabel lang sein muss oder groß genug, um das größte mögliche Blob zu speichern. Eine alternative Lösung besteht darin, einen Hash des Blobs zu erzeugen und ihn in einer separaten Nachschlagetabelle mit dem Hash als Index zu speichern. Dann können Sie nur den Hash in Ihrer ursprünglichen Datenbank speichern, der eine schön feste Länge hat.

Die möglichen Varianten für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es fast unmöglich ist, zufällig zwei Blobs mit demselben SHA1-Hash zu erstellen. Es _ist_ möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erzeugen, da SHA1 nicht kryptografisch sicher ist. Ein böswilliger Benutzer könnte theoretisch ein Datenblob erzeugen, das das Original in der Datenbank ersetzt, das unentdeckt bleibt, weil der Hash gleich ist. Dies ist ein Angriffsvektor, dessen man sich bewusst sein sollte.

## Wie git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein großartiges Beispiel, es nutzt Hashes auf zwei interessante Arten. Wenn Dateien in Git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Das macht es Git leicht, die Daten zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Inhalt der Datei für den Hash, sondern fügt auch die UTF8-Zeichenfolge `"blob "` voran, gefolgt von der Dateigröße in Bytes, die dezimal geschrieben ist, gefolgt vom Nullzeichen (das in JavaScript als `"\0"` geschrieben werden kann). Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu codieren, da Zeichenfolgen in JavaScript UTF16 sind.

Der unten stehende Code, wie unser SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu generieren. Das HTML zum Hochladen von Dateien bleibt gleich, aber wir leisten zusätzliche Arbeit, um die Größeninformation auf dieselbe Weise wie Git vorzubereiten.

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

## Wie Git Commit-Hashes generiert

Interessanterweise generiert Git Commit-Hashes auf ähnliche Weise auf Basis mehrerer Informationsstücke. Diese können den vorherigen Commit-Hash und die Commit-Nachricht enthalten, die zusammen einen neuen Hash ergeben. Dies kann verwendet werden, um Commits zu referenzieren, die auf mehreren eindeutigen Identifikatoren basieren.

Der Terminal-Befehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [How is git commit sha1 formed](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es die UTF8-Zeichenfolge (Nullzeichen geschrieben als `\0`):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Dies ist großartig, weil keines der einzelnen Felder garantiert einzigartig ist, aber wenn sie zusammengeführt werden, geben sie einen einzigartigen Zeiger auf einen einzelnen Commit. Allerdings ist die ganze Zeichenkette zu lang und unhandlich im Gebrauch. Daher wird durch das Hashen eine neue, einzigartige Zeichenkette erzeugt, die kurz genug ist, um bequem von mehreren Feldern aus geteilt zu werden.

Das Fazit daraus ist, dass, wenn Sie einen Schlüssel zu einigen Daten hinzufügen möchten, aber kein einzelnes Informationsstück einzigartig genug ist, das Zusammenfügen mehrerer Zeichenfolgen und deren Hashing eine großartige Möglichkeit ist, einen nützlichen Schlüssel zu erzeugen.

Hoffentlich haben diese Beispiele Sie ermutigt, sich diese neue leistungsstarke API anzuschauen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst zu rekonstruieren. Es reicht zu wissen, dass die Werkzeuge da sind und einige von ihnen, wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest) Funktion, nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
