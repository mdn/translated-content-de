---
title: Nicht-kryptografische Verwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Verwendung der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle. Das Erstellen von Hashes von Inhalten (was die Digest-Methode tut) hat viele sehr nützliche Zwecke.

Dieser Artikel bespricht nicht die kryptografischen Verwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt, den Sie aus diesem Artikel mitnehmen sollten, ist: **Verwenden Sie diese API nicht** für produktionsreife kryptografische Zwecke, da sie mächtig und niedrigstufig ist. Um sie korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben korrekt zu erfüllen. Wenn einer dieser Schritte falsch unternommen wird, läuft Ihr Code im besten Fall nicht, im schlimmsten Fall läuft er **doch** und Sie setzen Ihre Benutzer unbewusst einem Risiko mit einem unsicheren Produkt aus.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele Dinge, für die Sie Kryptografie verwenden möchten, sind bereits gelöst und Teil der Webplattform. Wenn Sie sich beispielsweise über Man-in-the-Middle-Angriffe Sorgen machen, bei denen Wi-Fi-Hotspots die Informationen zwischen dem Client und dem Server lesen, wird dies durch die korrekte Verwendung von {{Glossary("HTTPS", "HTTPS")}} gelöst. Möchten Sie Informationen sicher zwischen Nutzern senden? Dann können Sie eine Datenverbindung zwischen Nutzern einrichten, die [WebRTC-Datenkanäle](/de/docs/Web/API/WebRTC_API/Using_data_channels) verwenden, die als Teil des Standards verschlüsselt sind.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet niedrigstufige Primitiven für die Arbeit mit Kryptografie, aber die Implementierung eines Systems mit diesen Werkzeugen ist eine komplexe Aufgabe. Fehler sind schwer zu bemerken, und die Ergebnisse können bedeuten, dass die Daten Ihrer Nutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Nutzer sensible oder wertvolle Daten teilen.

Wenn Sie sich unsicher sind, versuchen Sie nicht, es selbst zu tun. Beauftragen Sie jemanden mit Erfahrung und stellen Sie sicher, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Hashing einer Datei

Dies ist das einfachste nützliche, was Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es erfordert keine Generierung von Schlüsseln oder Zertifikaten und besteht aus einem einzigen Schritt.

{{Glossary("Hash", "Hashing")}} ist eine Technik, bei der Sie eine große Byte-Folge in eine kleinere Zeichenfolge umwandeln, wobei kleine Änderungen an der langen Zeichenfolge zu großen Änderungen in der kleineren Zeichenfolge führen. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien zu überprüfen. Dies ist sehr praktisch, da Sie eine einfache Zeichenfolge zum Vergleichen haben. Um klarzustellen: Hashing ist ein **einseitiger** Vorgang. Sie können die ursprüngliche Byte-Folge nicht aus dem Hash zurückgewinnen.

Wenn zwei generierte Hashes gleich sind, aber die Dateien, die zu ihrer Erstellung verwendet wurden, unterschiedlich sind, spricht man von einer _Hash-Kollision_, die durch Zufall extrem unwahrscheinlich ist und bei einer sicheren Hash-Funktion wie SHA256 fast unmöglich absichtlich herzustellen ist. Wenn also die beiden Zeichenfolgen gleich sind, können Sie reasonably sicher sein, dass die beiden Originaldateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl für das Hashing von Dateien, aber es gibt [höherwertige Hash-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms) in der SubtleCrypto-Schnittstelle. Die häufigste Darstellung eines SHA256-Hashs ist eine Zeichenfolge aus 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass es nur die Zeichen 0-9 und a-f verwendet, die 4 Bits an Informationen repräsentieren. Kurz gesagt, ein SHA256-Hash verwandelt Daten beliebiger Länge in nahezu einzigartige 256 Bits Daten.

Diese Technik wird häufig von Seiten verwendet, die es Ihnen ermöglichen, ausführbare Dateien herunterzuladen, um sicherzustellen, dass die heruntergeladene Datei mit der vom Autor beabsichtigten übereinstimmt. Dies stellt sicher, dass Ihre Nutzer keine Malware installieren. Der gebräuchlichste Weg, dies zu tun, ist:

1. Notieren Sie den Dateinamen und die SHA256-Prüfsumme, die von der Website bereitgestellt wird.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /path/to/the/file` im Terminal aus, um Ihren eigenen Code zu generieren. Wenn Sie einen Mac verwenden, müssen Sie es möglicherweise [separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenfolgen - sie sollten übereinstimmen, es sei denn, die Datei wurde manipuliert.

![Beispiele von SHA256 von dem Download für die Software "Blender". Diese sehen aus wie 64 hexadezimale Ziffern, gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist hierfür nützlich. Um eine Prüfsumme einer Datei zu erstellen, können Sie dies wie folgt tun:

Zuerst fügen wir einige HTML-Elemente zum Laden von Dateien und Anzeigen der SHA-256-Ausgabe hinzu:

```html
<h3>Demonstration of hashing a file with SHA256</h3>

<label
  >Choose file(s) to hash <input type="file" id="file" name="file" multiple
/></label>
<output style="display:block;font-family:monospace;"></output>
```

Als Nächstes verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert durch:

- Lesen der Dateien in ein {{jsxref("ArrayBuffer")}} mit der [`File`](/de/docs/Web/API/File)-Objekt-Methode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer).
- Verwenden von `crypto.subtle.digest('SHA-256', arrayBuffer)`, um das ArrayBuffer zu hashen.
- Konvertieren des resultierenden Hashes (ein weiteres ArrayBuffer) in eine Zeichenfolge, damit er angezeigt werden kann.

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

An diesem Punkt denken Sie vielleicht: „Ich kann dies auf meiner eigenen Website verwenden, damit wir sicherstellen können, dass die Hashes übereinstimmen, wenn Nutzer eine Datei herunterladen, um den Nutzer zu beruhigen, dass ihr Download sicher ist“. Leider gibt es zwei Probleme, die sofort in den Sinn kommen:

- Exekutive Downloads sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Zwischenparteien solche Angriffe durchführen können, sodass es redundant wäre.
- Wenn der Angreifer in der Lage ist, die heruntergeladene Datei auf dem ursprünglichen Server zu ersetzen, dann kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um sie zu umgehen und einfach zu behaupten, dass alles in Ordnung ist. Wahrscheinlich etwas Heimliches wie das Ersetzen von [strikter Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu erkennen sein kann:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sich lohnen könnte, ist, wenn Sie eine Datei von einer Drittanbieter-Downloadquelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Standort {{Glossary("CORS", "CORS")}}-Header aktiviert hat, damit Sie die Datei scannen können, bevor Sie sie Ihren Nutzern zur Verfügung stellen. Leider haben nicht viele Server standardmäßig CORS aktiviert.

## Was bedeutet "Salt zum Hash hinzufügen"?

Ein Ausdruck, den Sie vielleicht schon gehört haben, ist „Salt zum Hash hinzufügen“. Es ist nicht unmittelbar relevant für unsere aktuellen Themen, aber es ist gut, darüber Bescheid zu wissen.

> [!NOTE]
> Dieser Abschnitt handelt von Passwortsicherheit, und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure, langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, ziemlich schnell und effizient zu sein, was es für Passwort-Hashing ungeeignet macht. Dieser Abschnitt ist rein zu Ihrem Interesse gedacht – verwenden Sie die Web Crypto API nicht zum Hashen von Passwörtern auf der Client-Seite.

Ein beliebter Anwendungsfall für Hashing ist Passwörter; Sie wollen niemals das Passwort eines Nutzers im Klartext speichern, das ist einfach eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Passworts des Nutzers, damit das Originalpasswort nicht wiederhergestellt werden kann, sollte ein Hacker Ihre Benutzername- und Passwortdatenbank erlangen. Diejenigen mit Adleraugen werden bemerken, dass Sie die Originalpasswörter immer noch ermitteln können, indem Sie die Hashes aus Listen bekannter Passwörter gegen die erlangte Passwort-Hash-Liste vergleichen. Das Anhängen einer Zeichenfolge an die Passwörter ändert den Hash, so dass er nicht mehr übereinstimmt. Dies ist als **Salting** bekannt. Ein weiteres kniffliges Problem ist, wenn Sie das gleiche Salt für jedes Passwort verwenden, dann Passwörter mit übereinstimmenden Hashes auch das gleiche Originalpasswort haben. Wenn Sie also eins kennen, kennen Sie alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, fügen Sie einen sogenannten _Salt zum Hash hinzu_. Für jedes Passwort generieren Sie ein Salt (eine zufällige Zeichenfolge von Zeichen) und verketten diese mit der Passwortzeichenfolge. Sie speichern dann den Hash und das Salt in der gleichen Datenbank, damit Sie bei späteren Anmeldungen des Nutzers eine Übereinstimmung überprüfen können. Dies bedeutet, dass wenn zwei Nutzer das gleiche Passwort verwenden, die Hashes unterschiedlich sein werden. Aus diesem Grund benötigen Sie eine teure kryptografische Funktion, damit es zu zeitaufwendig ist, Listen gängiger Passwörter zu verwenden, um herauszufinden, welche die Originalpasswörter waren.

## Hash-Tabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht-kryptografisch sichere Hashes zu erzeugen. Diese sind unglaublich nützlich, um einige willkürliche Daten in einen Schlüssel zu verwandeln, den Sie später nachschlagen können.

Zum Beispiel, wenn Sie eine Datenbank haben möchten, die einen großen Datenblock als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, da eines der Felder entweder variabler Länge sein oder groß genug sein muss, um den größtmöglichen Datenblock zu speichern. Eine alternative Lösung besteht darin, einen Hash des Blocks zu erzeugen und ihn in einer separaten Lookup-Tabelle unter Verwendung des Hashes als Index zu speichern. Sie können dann nur den Hash in Ihrer ursprünglichen Datenbank speichern, der eine schöne feste Länge hat.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es nahezu unmöglich ist, zufällig zwei Blöcke mit demselben SHA1-Hash zu erzeugen. Es _ist_ möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erstellen, da SHA1 kryptografisch nicht sicher ist. Ein böswilliger Nutzer könnte theoretisch einen Datenblock erzeugen, der das Original in der Datenbank ersetzt und unentdeckt bleibt, weil der Hash derselbe ist. Dies ist ein Angriffspunkt, den es zu beachten gilt.

## Wie Git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein gutes Beispiel, es verwendet Hashes auf zwei interessante Arten. Wenn Dateien in Git gespeichert werden, werden sie mit ihrem SHA1-Hash referenziert. Dies macht es Git leicht, die Daten zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Dateiinhalt für den Hash, sondern fügt diesem auch die UTF8-Zeichenfolge `"blob "` voran, gefolgt von der Dateigröße in Bytes in Dezimalform, gefolgt vom Nullzeichen (das in JavaScript als `"\0"` geschrieben werden kann). Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu kodieren, da Zeichenketten in JavaScript UTF16 sind.

Der unten stehende Code, ähnlich unserem SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu erzeugen. Das HTML zum Hochladen von Dateien bleibt das gleiche, aber wir leisten zusätzliche Arbeit, um die Größeninformationen auf die gleiche Weise wie Git voranzustellen.

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

Beachten Sie, wie es die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet, um den Header zu erstellen, der mit dem ursprünglichen ArrayBuffer verkettet wird, um die zu hashende Zeichenfolge zu erzeugen.

## Wie Git Commits-Hashes erzeugt

Interessanterweise erzeugt Git auch Commit-Hashes auf ähnliche Weise, basierend auf mehreren Informationsstücken. Diese können den vorherigen Commit-Hash und die Commit-Nachricht enthalten, die zusammenkommen, um einen neuen Hash zu erzeugen. Dies kann verwendet werden, um Commits zu referenzieren, die auf mehreren eindeutigen Identifikatoren basieren.

Der Terminalbefehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [Wie wird der git commit sha1 gebildet](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es die UTF8-Zeichenfolge (Nullzeichen als `\0` geschrieben):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Dies ist großartig, weil keines der einzelnen Felder garantiert einzigartig ist, aber wenn sie zusammen kombiniert werden, geben sie einen eindeutigen Zeiger auf einen einzelnen Commit. Der ganze String ist allerdings zu lang und umständlich zu verwenden. Indem man ihn hasht, erhält man einen neuen eindeutigen String, der kurz genug ist, um bequem aus mehreren Feldern zu teilen.

Deshalb ändert sich der Hash, wenn Sie jemals Ihren Commit geändert haben, selbst wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, was auch nur durch ein einziges Zeichen genug ist, um den neuen Hash vollständig zu ändern.

Die Erkenntnis daraus ist, dass, wenn Sie einem Datum einen Schlüssel hinzufügen möchten, aber keine einzige Informationsquelle einzigartig genug ist, das Verketten mehrerer Strings zu einer zeichenfolgen und anschließendes Hashing dieser eine großartige Methode ist, um einen hilfreichen Schlüssel zu erzeugen.

Hoffentlich haben diese Beispiele Sie dazu ermutigt, sich diese neue mächtige API anzusehen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst zu rekonstruieren. Es ist genug zu wissen, dass die Werkzeuge vorhanden sind und einige von ihnen, wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion, nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
