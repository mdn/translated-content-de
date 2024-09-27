---
title: Nicht-kryptografische Anwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Anwendungen der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle. Das Erstellen von Hashes von Inhalten (das ist, was die Digest-Methode macht) hat jedoch viele sehr nützliche Anwendungen.

Dieser Artikel diskutiert nicht die kryptografischen Anwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt, der aus diesem Artikel mitgenommen werden soll, ist: Verwenden Sie diese API **nicht** für kryptografische Zwecke in Produktionsumgebungen, da sie leistungsfähig und niedrigstufig ist. Um sie korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben korrekt auszuführen. Wenn einer dieser Schritte falsch ausgeführt wird, wird Ihr Code im besten Fall nicht ausgeführt, im schlimmsten Fall wird er ausgeführt und Sie setzen Ihre Benutzer unwissentlich einem Risiko mit einem unsicheren Produkt aus.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele der Dinge, für die Sie Kryptografie verwenden möchten, sind bereits gelöst und Teil der Web-Plattform. Beispielsweise, wenn Sie sich Sorgen über Man-in-the-Middle-Angriffe machen, wie z. B. dass Wi-Fi-Hotspots die Informationen zwischen dem Client und dem Server lesen, kann dies durch die korrekte Verwendung von [HTTPS](/de/docs/Glossary/HTTPS) gelöst werden. Möchten Sie Informationen sicher zwischen Benutzern senden? Dann können Sie eine Datenverbindung zwischen Benutzern mithilfe von [WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die im Rahmen des Standards verschlüsselt sind.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet niedrigstufige Primitive für die Arbeit mit Kryptografie, aber die Implementierung eines Systems mit diesen Werkzeugen ist eine komplizierte Aufgabe. Fehler sind schwer zu erkennen und können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten austauschen.

Bei Zweifeln sollten Sie nicht versuchen, es selbst zu tun. Stellen Sie jemanden mit Erfahrung ein und stellen Sie sicher, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Hashen einer Datei

Dies ist das einfachste nützliche, was Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es beinhaltet nicht das Generieren von Schlüsseln oder Zertifikaten und besteht aus einem einzigen Schritt.

[Hashen](/de/docs/Glossary/Hash) ist eine Technik, bei der Sie eine große Byte-Zeichenfolge in eine kleinere Zeichenfolge umwandeln, bei der kleine Änderungen an der langen Zeichenfolge zu großen Änderungen in der kleineren Zeichenfolge führen. Diese Technik eignet sich zum Identifizieren zweier identischer Dateien, ohne jedes Byte beider Dateien zu überprüfen. Dies ist sehr nützlich, da Sie eine einfache Zeichenfolge zum Vergleichen haben. Um klar zu sein, ist Hashing eine **einweg**-Operation. Sie können die ursprüngliche Byte-Zeichenfolge nicht aus dem Hash generieren.

Wenn zwei generierte Hashes gleich sind, aber die Dateien, die zu ihrer Erstellung verwendet wurden, unterschiedlich sind, ist dies als _Hash-Kollision_ bekannt, die ein extrem unwahrscheinlicher Zufall ist und bei einer sicheren Hash-Funktion wie SHA256 nahezu unmöglich herstellbar ist. Wenn also die beiden Zeichenfolgen gleich sind, können Sie sich ziemlich sicher sein, dass die beiden ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl zum Hashen von Dateien, aber es gibt [höhere Ordnungs-Hash-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms), die in der SubtleCrypto-Schnittstelle verfügbar sind. Die häufigste Darstellung eines SHA256-Hashes ist eine Zeichenfolge mit 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass es nur die Zeichen 0-9 und a-f verwendet, um 4 Bit Informationen darzustellen. Kurz gesagt, ein SHA256-Hash wandelt Daten jeder Länge in nahezu einzigartige 256 Bits Daten um.

Diese Technik wird häufig von Websites verwendet, die Ihnen das Herunterladen von ausführbaren Dateien ermöglichen, um sicherzustellen, dass die heruntergeladene Datei der entspricht, die der Autor beabsichtigt hat. Dies stellt sicher, dass Ihre Benutzer keine Malware installieren. Der häufigste Weg, dies zu tun, ist:

1. Notieren Sie den Dateinamen und die vom Website bereitgestellte SHA256-Prüfsumme.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /path/to/the/file` im Terminal aus, um Ihren eigenen Code zu generieren. Wenn Sie einen Mac verwenden, müssen Sie ihn möglicherweise [separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenfolgen - sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele von SHA256 vom Download der Software "Blender". Diese sehen aus wie 64 hexadezimale Ziffern, gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist dafür nützlich. Um eine Prüfsumme einer Datei zu erzeugen, können Sie dies wie folgt tun:

Zuerst fügen wir einige HTML-Elemente zum Laden von Dateien und Anzeigen der SHA-256-Ausgabe hinzu:

```html
<h3>Demonstration of hashing a file with SHA256</h3>

<label
  >Choose file(s) to hash <input type="file" id="file" name="file" multiple
/></label>
<output style="display:block;font-family:monospace;"></output>
```

Anschließend verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert, indem:

- Die Dateien in einen {{jsxref("ArrayBuffer")}} mit der [`File`](/de/docs/Web/API/File)-Objektmethode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) gelesen werden.
- Verwenden Sie `crypto.subtle.digest('SHA-256', arrayBuffer)`, um den ArrayBuffer zu verdauen.
- Konvertieren Sie den resultierenden Hash (ein weiteres ArrayBuffer) in eine Zeichenfolge, damit er angezeigt werden kann.

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

An diesem Punkt denken Sie vielleicht: "_Ich kann dies auf meiner eigenen Website verwenden, sodass wir beim Herunterladen einer Datei die Übereinstimmung der Hashes sicherstellen können, um den Benutzer zu beruhigen, dass sein Download sicher ist_". Leider gibt es zwei Probleme, die sofort in den Sinn kommen:

- Ausführbare Downloads sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Dritte Angriffe wie diesen durchführen, sodass es redundant wäre.
- Wenn der Angreifer in der Lage ist, die heruntergeladene Datei auf dem ursprünglichen Server zu ersetzen, kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um sie zu umgehen und einfach zu sagen, dass alles in Ordnung ist. Wahrscheinlich etwas Heimtückisches wie das Ersetzen von [strikter Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu erkennen sein kann:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sich lohnen könnte, ist, wenn Sie eine Datei von einer Drittanbieter-Downloadquelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Ort [CORS](/de/docs/Glossary/CORS)-Header aktiviert hat, um Ihnen das Scannen der Datei zu ermöglichen, bevor Sie sie Ihren Benutzern zur Verfügung stellen. Leider haben viele Server CORS standardmäßig nicht aktiviert.

## Was bedeutet "Salzen des Hashes"?

Ein bekannter Ausdruck ist _"Salzen des Hashes"_. Es ist nicht direkt relevant für unsere aktuellen Themen, aber es ist gut, darüber Bescheid zu wissen.

> [!NOTE]
> Dieser Abschnitt spricht über die Passwortsicherheit und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist so konzipiert, dass es ziemlich schnell und effizient ist, was es für das Passwort-Hashing ungeeignet macht. Dieser Abschnitt ist rein zu Informationszwecken — verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Eine häufige Verwendung von Hashing ist Passwörter, Sie möchten niemals das Passwort eines Benutzers im Klartext speichern, das ist schlichtweg eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Passworts des Benutzers, sodass das ursprüngliche Passwort nicht wiederhergestellt werden kann, sollte ein Hacker auf Ihre Benutzername- und Passwort-Datenbank zugreifen. Die aufmerksamen unter Ihnen werden bemerken, dass Sie die ursprünglichen Passwörter immer noch dadurch ermitteln können, dass Sie die Hashes mit Listen bekannter Passwörter gegen die erlangte Passwort-Hash-Liste vergleichen. Wird ein String an die Passwörter angehängt, ändert sich der Hash, sodass er nicht mehr übereinstimmt. Dies ist als **Salzen** bekannt. Ein weiteres kniffliges Problem ist, dass, wenn Sie für jedes Passwort dasselbe Salz verwenden, übereinstimmende Hashes auch dasselbe ursprüngliche Passwort haben. Wenn Sie also eines kennen, kennen Sie alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, führen Sie das aus, was als _Salzen des Hashs_ bekannt ist. Für jedes Passwort generieren Sie ein Salz (eine zufällige Zeichenfolge) und hängen es an den Passwort-String an. Sie speichern dann den Hash und das Salz in derselben Datenbank, damit Sie bei einem späteren Anmeldeversuch des Benutzers eine Übereinstimmung überprüfen können. Dies bedeutet, dass, wenn zwei Benutzer dasselbe Passwort verwenden, die Hashes unterschiedlich sind. Daher benötigen Sie eine teure kryptografische Funktion, damit es zu zeitaufwendig ist, Listen üblicher Passwörter zu verwenden, um die ursprünglichen Passwörter herauszufinden.

## Hash-Tabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht-kryptografisch sichere Hashes zu erzeugen. Diese sind unglaublich nützlich, um einige beliebige Daten in einen Schlüssel zu verwandeln, den Sie später nachschlagen können.

Zum Beispiel, wenn Sie eine Datenbank haben möchten, die ein großes Datenobjekt als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, da eines der Felder entweder eine variable Länge haben oder groß genug sein muss, um das größtmögliche Datenobjekt zu speichern. Eine alternative Lösung besteht darin, einen Hash des Objekts zu erzeugen und ihn in einer separaten Suchregisterkarte mit dem Hash als Index zu speichern. Sie können dann nur den Hash in Ihrer ursprünglichen Datenbank speichern, der eine schöne feste Länge hat.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es nahezu unmöglich ist, dass versehentlich zwei Objekte mit demselben SHA1-Hash erzeugt werden. Es _ist_ möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erzeugen, da SHA1 nicht kryptografisch sicher ist. So könnte ein bösartiger Benutzer theoretisch ein Datenobjekt erzeugen, das das Original in der Datenbank ersetzt und unbemerkt bleibt, weil der Hash derselbe ist. Dies ist ein Angriffsvektor, den man sich bewusst machen sollte.

## Wie git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein großartiges Beispiel, es verwendet Hashes auf zwei interessante Arten. Wenn Dateien in Git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Dies macht es schnell für Git, die Daten zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Dateiinhalt für den Hash, sondern fügt auch das UTF8-String `"blob "` hinzu, gefolgt von der Dateigröße in Bytes, geschrieben in Dezimal, gefolgt vom Null-Zeichen (das in JavaScript als `"\0"` geschrieben werden kann). Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu codieren, da Zeichenfolgen in JavaScript UTF16 sind.

Der folgende Code, wie unser SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu erzeugen. Das HTML zum Hochladen von Dateien bleibt gleich, aber wir erledigen einige zusätzliche Arbeiten, um die Größeninformationen auf die gleiche Weise wie Git voranzustellen.

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

Beachten Sie, wie es die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet, um den Header zu erzeugen, der mit dem ursprünglichen ArrayBuffer verkettet wird, um die zu hashende Zeichenfolge zu erzeugen.

## Wie git Commit-Hashes erzeugt

Interessanterweise erzeugt Git auch Commit-Hashes auf ähnliche Weise basierend auf mehreren Informationen. Dazu gehören der vorherige Commit-Hash und der Commit-Text, die zusammen einen neuen Hash erzeugen. Dies kann dazu verwendet werden, Referenzen auf Commits zu erstellen, die auf mehreren eindeutigen Identifikatoren basieren.

Der Terminalbefehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [How is git commit sha1 formed](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es der UTF8-String (Null-Zeichen geschrieben als `\0`):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Das ist großartig, weil keines der einzelnen Felder garantiert eindeutig ist, aber wenn sie zusammengefügt werden, geben sie einen eindeutigen Zeiger auf einen einzelnen Commit. Jedoch ist die ganze Zeichenfolge zu lang und unhandlich zu verwenden. Daher erhalten Sie durch das Hashing einen neuen eindeutigen String, der kurz genug ist, um bequem aus mehreren Feldern geteilt zu werden.

Deshalb ändert sich der Hash, wenn Sie jemals Ihren Commit abgeändert haben, auch wenn Sie keine Änderungen an der Nachricht machen. Der Zeitstempel des Commits hat sich geändert, was selbst bei einem einzigen Zeichen ausreicht, um den neuen Hash völlig zu ändern.

Die Quintessenz davon ist, dass, wenn Sie einen Schlüssel zu einigen Daten hinzufügen möchten, aber keiner der Einzelteile der Information ausreichend einzigartig ist, kann das Verketten mehrerer Zeichenfolgen und das Hashen derselben eine großartige Möglichkeit sein, einen nützlichen Schlüssel zu erzeugen.

Hoffentlich haben diese Beispiele Sie ermutigt, sich diese neue leistungsstarke API anzusehen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst zu erstellen. Es genügt zu wissen, dass die Werkzeuge vorhanden sind und einige von ihnen, wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion, nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
