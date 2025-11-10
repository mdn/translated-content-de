---
title: Nicht-kryptografische Anwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: c6dea04bccd3a505edad2c42111a3974516f134f
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Verwendung der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle, aber das Erstellen von Hashes von Inhalten (was die digest-Methode tut) hat viele sehr nützliche Zwecke.

Dieser Artikel behandelt nicht die kryptografischen Anwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt, den Sie aus diesem Artikel mitnehmen sollten, ist **verwenden Sie diese API nicht** für produktionsreife kryptografische Zwecke, da sie leistungsstark und auf niedriger Ebene ist. Um diese korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben korrekt zu erledigen. Wenn einer dieser Schritte falsch ausgeführt wird, wird Ihr Code im besten Fall nicht ausgeführt, im schlimmsten Fall wird er ausgeführt und Sie setzen Ihre Benutzer unbewusst einem Risiko mit einem unsicheren Produkt aus.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele Dinge, für die Sie Kryptografie verwenden möchten, sind bereits gelöst und Teil der Web-Plattform. Wenn Sie sich beispielsweise Sorgen über Man-in-the-Middle-Angriffe machen, wie z.B. Wi-Fi-Hotspots, die die Informationen zwischen dem Client und dem Server lesen, wird dies durch die korrekte Verwendung von {{Glossary("HTTPS", "HTTPS")}} gelöst. Möchten Sie sicher Informationen zwischen Benutzern senden? Dann können Sie eine Datenverbindung zwischen Benutzern mithilfe von [WebRTC Data Channels](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die als Teil des Standards verschlüsselt ist.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet grundlegende Primitiven für die Arbeit mit Kryptografie, aber die Implementierung eines Systems mit diesen Werkzeugen ist eine komplizierte Aufgabe. Fehler sind schwer zu bemerken und die Ergebnisse können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten austauschen.

Im Zweifelsfall versuchen Sie nicht, es selbst zu lösen, sondern beauftragen jemanden mit Erfahrung und stellen Sie sicher, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Hashing einer Datei

Dies ist das einfachste nützliche, was Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es beinhaltet nicht das Generieren von Schlüsseln oder Zertifikaten und besteht aus nur einem einzigen Schritt.

{{Glossary("Hash_function", "Hashing")}} ist eine Technik, bei der Sie eine große Zeichenkette von Bytes in eine kleinere Zeichenkette umwandeln, wobei kleine Änderungen an der langen Zeichenkette zu großen Änderungen in der kleineren Zeichenkette führen. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien überprüfen zu müssen. Dies ist sehr nützlich, da Sie eine einfache Zeichenkette zum Vergleichen haben. Um klarzustellen: Hashing ist ein **einseitiger** Vorgang. Sie können die ursprüngliche Zeichenkette von Bytes nicht aus dem Hash generieren.

Wenn zwei generierte Hashes gleich sind, aber die Dateien, die verwendet wurden, um sie zu generieren, unterschiedlich sind, ist dies als _Hash-Kollision_ bekannt, was ein extrem unwahrscheinliches Ereignis ist, das zufällig auftritt, und für eine sichere Hash-Funktion wie SHA256 fast unmöglich herzustellen. Wenn also die beiden Zeichenketten gleich sind, können Sie sich ziemlich sicher sein, dass die beiden ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl zum Hashing von Dateien, aber in der SubtleCrypto-Schnittstelle sind [höherwertige Hashing-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms) verfügbar. Die häufigste Darstellung eines SHA256-Hashes ist eine Zeichenkette aus 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass es nur die Zeichen 0-9 und a-f verwendet, die 4 Bit Information repräsentieren. Kurz gesagt, ein SHA256-Hash verwandelt Daten beliebiger Länge in fast einzigartige 256 Bit Daten.

Diese Technik wird oft von Websites verwendet, die Ihnen den Download von ausführbaren Dateien ermöglichen, um sicherzustellen, dass die heruntergeladene Datei mit der Dateiinformation übereinstimmt, die der Autor vorgesehen hat. Dies stellt sicher, dass Ihre Benutzer keine Malware installieren. Der häufigste Weg, dies zu tun, ist:

1. Notieren Sie sich den Dateinamen und die SHA256-Prüfsumme, die von der Website bereitgestellt werden.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /path/to/the/file` im Terminal aus, um Ihren eigenen Code zu generieren. Wenn Sie einen Mac verwenden, müssen Sie möglicherweise [es separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenfolgen - sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele für SHA256 aus dem Download der Software "Blender". Diese sehen aus wie 64 hexadezimale Ziffern, gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist hierfür nützlich. Um eine Prüfsumme einer Datei zu erzeugen, können Sie es folgendermaßen machen:

Zuerst fügen wir einige HTML-Elemente zum Laden von Dateien und Anzeigen der SHA-256-Ausgabe hinzu:

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

Als Nächstes verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert, indem:

- Die Dateien mit der Methode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) des [`File`](/de/docs/Web/API/File)-Objekts in einen {{jsxref("ArrayBuffer")}} gelesen werden
- Verwenden Sie `crypto.subtle.digest('SHA-256', arrayBuffer)`, um den ArrayBuffer zu digestieren
- Konvertieren Sie den resultierenden Hash (einen weiteren ArrayBuffer) in eine Zeichenkette, sodass er angezeigt werden kann

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

An diesem Punkt denken Sie vielleicht: "_Ich kann dies auf meiner eigenen Website verwenden, um sicherzustellen, dass beim Herunterladen einer Datei die Hashes übereinstimmen, um dem Benutzer zu versichern, dass sein Download sicher ist_". Leider gibt es zwei Probleme, die sofort einfallen:

- Herunterladbare ausführbare Dateien sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Zwischenparteien Angriffe wie diese durchführen können, sodass es überflüssig wäre.
- Wenn der Angreifer in der Lage ist, die heruntergeladene Datei auf dem ursprünglichen Server zu ersetzen, kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um diese zu umgehen und einfach zu behaupten, dass alles in Ordnung ist. Wahrscheinlich etwas Heimliches wie das Ersetzen der [strikten Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu erkennen sein kann:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sich lohnen kann, ist, wenn Sie eine Datei von einer Drittquelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Speicherort {{Glossary("CORS", "CORS")}}-Header aktiviert hat, damit Sie die Datei scannen können, bevor Sie sie Ihren Benutzern verfügbar machen. Leider haben nicht viele Server CORS standardmäßig aktiviert.

## Was bedeutet "Salting the Hash"?

Ein Ausdruck, den Sie vielleicht schon einmal gehört haben, ist _"Salting the Hash"_. Es ist nicht unmittelbar relevant für unsere aktuellen Themen, aber es ist gut zu wissen.

> [!NOTE]
> Dieser Abschnitt spricht über Passwortsicherheit und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, ziemlich schnell und effizient zu sein, was es ungeeignet für Passwort-Hashing macht. Dieser Abschnitt ist rein zu Ihrer Information — verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Ein beliebter Anwendungsfall für Hashing ist das Speichern von Passwörtern. Sie sollten niemals das Passwort eines Benutzers im Klartext speichern, das ist einfach eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Benutzerpassworts, sodass das ursprüngliche Passwort nicht wiederhergestellt werden kann, sollte ein Hacker Ihre Benutzername-und-Passwort-Datenbank erhalten. Aufmerksame Beobachter werden jedoch feststellen, dass Sie die ursprünglichen Passwörter trotzdem herausfinden können, indem Sie die Hashes bekannter Passwörter mit der erhaltenen Passwort-Hash-Liste vergleichen. Das Anhängen einer Zeichenkette an die Passwörter ändert den Hash, sodass er nicht mehr übereinstimmt. Dies wird als **Salting** bezeichnet. Ein weiteres schwieriges Problem ist, wenn Sie dasselbe Salt für jedes Passwort verwenden, dann haben Passwörter mit übereinstimmenden Hashes auch dasselbe ursprüngliche Passwort. Wenn Sie also eines kennen, kennen Sie alle zusammenhängenden Passwörter.

Um dieses Problem zu lösen, erstellen Sie ein _Salting des Hashes_. Für jedes Passwort generieren Sie ein Salt (eine zufällige Zeichenkette) und hängen es an die Passwortzeichenkette an. Dann speichern Sie den Hash und das Salt in derselben Datenbank, damit Sie bei einem späteren Anmeldeversuch des Benutzers eine Übereinstimmung überprüfen können. Dadurch wird sichergestellt, dass, wenn zwei Benutzer dasselbe Passwort verwenden, die Hashes unterschiedlich sind. Deshalb benötigen Sie eine teure kryptografische Funktion, um es zu zeitaufwändig zu machen, Listen gängiger Passwörter zu verwenden, um die ursprünglichen Passwörter herauszufinden.

## Hashtabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht-kryptografisch sichere Hashes zu generieren. Diese sind unglaublich nützlich, um einige beliebige Daten in einen Schlüssel zu verwandeln, den Sie später nachschlagen können.

Zum Beispiel, wenn Sie eine Datenbank haben möchten, die ein großes Datenblob als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, da eines der Felder entweder variabler Länge sein muss oder groß genug, um das größte mögliche Blob zu speichern. Eine alternative Lösung ist es, einen Hash des Blobs zu erzeugen und ihn in einer separaten Nachschlagetabelle zu speichern, wobei der Hash als Index verwendet wird. Dann können Sie einfach den Hash in Ihrer ursprünglichen Datenbank speichern, der eine schöne feste Länge hat.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es fast unmöglich ist, zufällig zwei Blobs mit demselben SHA1-Hash zu erzeugen. Es _ist_ möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erzeugen, da SHA1 nicht kryptografisch sicher ist. Ein böswilliger Benutzer könnte theoretisch ein Datenblob erzeugen, das das Original in der Datenbank ersetzt, was unentdeckt bleibt, weil der Hash derselbe ist. Dies ist ein zu beachtender Angriffspunkt.

## Wie Git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein großartiges Beispiel. Es verwendet Hashes auf zwei interessante Arten. Wenn Dateien in Git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Dies macht es für Git schnell, die Daten zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Dateiin

halt für den Hash, sondern fügt auch die UTF8-Zeichenkette `"blob "` voran, gefolgt von der Dateigröße in Bytes, die dezimal geschrieben ist, gefolgt vom Nullzeichen (im JavaScript geschrieben als `"\0"`). Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu codieren, da Zeichenketten in JavaScript UTF16 sind.

Der untenstehende Code, ähnlich unserem SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu erzeugen. Das HTML zum Hochladen von Dateien bleibt gleich, aber wir führen einige zusätzliche Arbeiten durch, um die Größeninformationen auf dieselbe Weise wie Git voranzustellen.

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

Beachten Sie, wie die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet wird, um den Header zu erzeugen, der mit dem ursprünglichen ArrayBuffer verkettet wird, um die zu hashende Zeichenkette zu erzeugen.

## Wie Git Commit-Hashes generiert

Interessanterweise generiert Git auch Commit-Hashes auf ähnliche Weise, basierend auf mehreren Informationsstücken. Diese können den vorherigen Commit-Hash und die Commit-Nachricht umfassen, die zusammen einen neuen Hash erzeugen. Dieser kann verwendet werden, um Referenzen für Commits zu erstellen, die auf mehreren eindeutigen Identifikatoren basieren.

Der Terminalbefehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [How is git commit sha1 formed](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es die UTF8-Zeichenkette (Nullzeichen geschrieben als `\0`):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Das ist großartig, weil keines der einzelnen Felder garantiert eindeutig ist, aber wenn sie zusammengefügt werden, ergeben sie einen eindeutigen Zeiger auf einen einzelnen Commit. Die ganze Zeichenkette ist jedoch zu lang und unhandlich zu verwenden. Durch das Hashen erhalten Sie eine neue eindeutige Zeichenkette, die kurz genug ist, um bequem aus mehreren Feldern geteilt zu werden.

Deshalb ändert sich der Hash, wenn Sie jemals Ihren Commit geändert haben, selbst wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, was selbst durch ein einzelnes Zeichen genug ist, um den neuen Hash vollständig zu ändern.

Die Erkenntnis daraus ist, dass, wenn Sie einen Schlüssel zu einigen Daten hinzufügen möchten, aber kein einzelnes Informationsstück einzigartig genug ist, dann ist das Zusammenfügen mehrerer Zeichenketten und das Hashing eine großartige Möglichkeit, einen nützlichen Schlüssel zu erzeugen.

Hoffentlich haben diese Beispiele Sie dazu ermutigt, sich diese neue leistungsstarke API anzusehen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst zu erstellen. Es reicht zu wissen, dass die Werkzeuge da sind und einige von ihnen, wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion, nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
