---
title: Nicht-kryptografische Verwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Verwendung der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle, doch das Erstellen von Hashes von Inhalten (was die `digest`-Methode tut) hat viele sehr nützliche Zwecke.

Dieser Artikel diskutiert nicht die kryptografischen Anwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt zum Mitnehmen aus diesem Artikel ist: **Verwenden Sie diese API nicht** für Produktivzwecke in der Kryptografie, da sie leistungsfähig und auf niedriger Ebene ist. Um sie korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben korrekt auszuführen. Wenn einer dieser Schritte falsch durchgeführt wird, läuft Ihr Code im besten Fall nicht, im schlimmsten Fall läuft er _und_ Sie setzen Ihre Benutzer unwissentlich einem Risiko mit einem unsicheren Produkt aus.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele der Dinge, für die Sie Kryptografie einsetzen würden, sind bereits gelöst und Teil der Webplattform. Wenn Sie beispielsweise besorgt über Man-in-the-Middle-Angriffe sind, wie z. B. dass Wi-Fi-Hotspots Informationen zwischen dem Client und dem Server lesen, wird dies durch die korrekte Verwendung von [HTTPS](/de/docs/Glossary/HTTPS) gelöst. Möchten Sie Informationen sicher zwischen Benutzern senden? Dann können Sie eine Datenverbindung zwischen Benutzern über [WebRTC-Datenkanäle](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die als Teil des Standards verschlüsselt ist.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet grundlegende Werkzeuge für die Arbeit mit Kryptografie, aber die Implementierung eines Systems mit diesen Werkzeugen ist eine komplexe Aufgabe. Fehler sind schwer zu erkennen und die Ergebnisse können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten teilen.

Wenn Sie Zweifel haben, versuchen Sie es nicht selbst zu machen, engagieren Sie jemanden mit Erfahrung und sorgen Sie dafür, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Hashing einer Datei

Dies ist das einfachste nützliche, was Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es erfordert nicht das Erzeugen von Schlüsseln oder Zertifikaten und hat einen einzigen Schritt.

[Hashing](/de/docs/Glossary/Hash) ist eine Technik, bei der Sie eine große Zeichenfolge von Bytes in eine kleinere Zeichenfolge umwandeln, wobei kleine Änderungen an der langen Zeichenfolge zu großen Änderungen in der kleineren Zeichenfolge führen. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien zu überprüfen. Dies ist sehr nützlich, da Sie eine einfache Zeichenfolge zum Vergleichen haben. Um klarzustellen, Hashing ist ein **einseitiger** Vorgang. Man kann die ursprüngliche Zeichenfolge von Bytes nicht aus dem Hash erzeugen.

Wenn zwei generierte Hashes gleich sind, die Dateien, die zu ihrer Erzeugung verwendet wurden, jedoch unterschiedlich sind, wird dies als _Hash-Kollision_ bezeichnet, was extrem unwahrscheinlich ist und für eine sichere Hash-Funktion wie SHA256 fast unmöglich herzustellen ist. Wenn also die beiden Zeichenketten gleich sind, können Sie ziemlich sicher sein, dass die beiden ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl für das Hashing von Dateien, es gibt jedoch [höherwertige Hashing-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms), die in der SubtleCrypto-Schnittstelle verfügbar sind. Die gängigste Darstellung eines SHA256-Hashes ist eine Zeichenkette aus 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass es nur die Zeichen 0-9 und a-f verwendet, die 4 Bit Informationen darstellen. Kurz gesagt, ein SHA256-Hash wandelt beliebig lange Daten in fast einzigartige 256 Bit Daten um.

Diese Technik wird oft von Websites verwendet, die Ihnen das Herunterladen von ausführbaren Dateien ermöglichen, um sicherzustellen, dass die heruntergeladene Datei mit der übereinstimmt, die der Autor beabsichtigt hat. Dies stellt sicher, dass Ihre Benutzer keine Malware installieren. Die gebräuchlichste Methode, dies zu tun, ist:

1. Notieren Sie sich den Dateinamen und die vom Website bereitgestellte SHA256-Prüfsumme.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /path/to/the/file` im Terminal aus, um Ihren eigenen Code zu erzeugen. Wenn Sie einen Mac verwenden, müssen Sie ihn möglicherweise [separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenketten – sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele von SHA256 aus dem Download für die Software „Blender“. Diese sehen aus wie 64 hexadezimale Ziffern gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist hierfür nützlich. Um eine Prüfsumme einer Datei zu erzeugen, können Sie es folgendermaßen tun:

Zuerst fügen wir einige HTML-Elemente hinzu, um einige Dateien zu laden und die SHA-256-Ausgabe anzuzeigen:

```html
<h3>Demonstration of hashing a file with SHA256</h3>

<label
  >Choose file(s) to hash <input type="file" id="file" name="file" multiple
/></label>
<output style="display:block;font-family:monospace;"></output>
```

Als Nächstes verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert, indem:

- Die Dateien in einen {{jsxref("ArrayBuffer")}} mit der [`File`](/de/docs/Web/API/File)-Objektmethode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) gelesen werden.
- `crypto.subtle.digest('SHA-256', arrayBuffer)` verwendet, um den ArrayBuffer zu verarbeiten
- Den resultierenden Hash (einen anderen ArrayBuffer) in eine Zeichenfolge umwandeln, sodass er angezeigt werden kann

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

### Wo würden Sie dies anwenden?

An diesem Punkt könnten Sie sich denken: "_Ich kann dies auf meiner eigenen Website verwenden, sodass wir beim Herunterladen einer Datei sicherstellen können, dass die Hashes übereinstimmen, um den Benutzer zu beruhigen, dass sein Download sicher ist_". Leider gibt es hier zwei sofort offensichtliche Probleme:

- Ausführbare Downloads sollten **immer** über HTTPS erfolgen. Dies verhindert, dass zwischengeschaltete Parteien solche Angriffe durchführen, sodass es überflüssig wäre.
- Wenn der Angreifer in der Lage ist, die Download-Datei auf dem ursprünglichen Server zu ersetzen, kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um es zu umgehen und einfach zu erklären, dass alles in Ordnung ist. Wahrscheinlich etwas listig wie das Ersetzen [strikter Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu erkennen sein kann:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es nützlich sein könnte, ist, wenn Sie eine Datei von einer Drittanbieter-Downloadquelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Standort [CORS](/de/docs/Glossary/CORS)-Header aktiviert hat, um Ihnen die Überprüfung der Datei zu ermöglichen, bevor Sie sie Ihren Nutzern zur Verfügung stellen. Leider haben nicht viele Server CORS standardmäßig aktiviert.

## Was ist „Salting the Hash“?

Ein Ausdruck, den Sie vielleicht schon einmal gehört haben, ist _„Salting the Hash“_. Es ist nicht unmittelbar relevant für unsere Themen, aber es ist gut, darüber Bescheid zu wissen.

> [!NOTE]
> Dieser Abschnitt spricht über Passwortsicherheit und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie kostspielige langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, ziemlich schnell und effizient zu sein, was es für die Passwort-Hashing ungeeignet macht. Dieser Abschnitt ist rein zu Ihrem Interesse — verwenden Sie das Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Eine beliebte Anwendung von Hashing sind Passwörter, Sie sollten niemals ein Benutzerpasswort im Klartext speichern, das ist einfach eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Benutzerpassworts, damit das ursprüngliche Passwort nicht wiederhergestellt werden kann, falls ein Hacker Ihre Benutzername- und Passwortdatenbank erhält. Der aufmerksame Leser könnte bemerken, dass man immer noch die ursprünglichen Passwörter herausfinden kann, indem man die Hashes mit Listen bekannter Passwörter gegen die erhaltene Passwort-Hash-Liste vergleicht. Anhängen einer Zeichenkette an die Passwörter ändert den Hash, sodass er nicht mehr übereinstimmt. Dies ist als **salting** bekannt. Ein weiteres schwieriges Problem ist, dass wenn Sie dasselbe Salt für jedes Passwort verwenden, dann Passwörter mit übereinstimmenden Hashes auch das gleiche ursprüngliche Passwort sein werden. Wenn Sie also eines kennen, kennen Sie alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, führen Sie das sogenannte _Salting the Hash_ durch. Für jedes Passwort generieren Sie ein Salt (eine zufällige Zeichenfolge) und fügen es mit der Passwortzeichenfolge zusammen. Sie speichern dann den Hash und das Salt in derselben Datenbank, damit Sie bei einem späteren Login-Versuch des Benutzers eine Übereinstimmung überprüfen können. Dies bedeutet, dass wenn zwei Benutzer dasselbe Passwort verwenden, die Hashes unterschiedlich sein werden. Daher benötigen Sie eine teure kryptografische Funktion, damit es zu zeitaufwändig wird, Listen häufiger Passwörter zu verwenden, um herauszufinden, was die ursprünglichen Passwörter waren.

## Hash-Tabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht-kryptografisch sichere Hashes zu erzeugen. Diese sind unglaublich nützlich, um einige beliebige Daten in einen Schlüssel zu verwandeln, den Sie später nachschlagen können.

Beispielsweise, wenn Sie eine Datenbank haben möchten, die ein großes Datenobjekt als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, weil eines der Felder entweder variable Länge haben muss oder groß genug sein muss, um das größte mögliche Objekt zu speichern. Eine alternative Lösung besteht darin, einen Hash des Objekts zu erzeugen und ihn in einer separaten Nachschlagetabelle mit dem Hash als Index zu speichern. Sie können dann nur den Hash in Ihrer ursprünglichen Datenbank speichern, was eine schöne feste Länge hat.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass das versehentliche Erzeugen von zwei Objekten mit demselben SHA1-Hash nahezu unmöglich ist. Es _ist_ möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erzeugen, da SHA1 kryptografisch nicht sicher ist. Ein böswilliger Benutzer könnte theoretisch eine Datenobjekt erzeugen, das das Original in der Datenbank ersetzt, das unentdeckt bleibt, weil der Hash gleich ist. Dies ist ein Angriffsvektor, den Sie beachten sollten.

## Wie git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein gutes Beispiel, es verwendet Hashes auf zwei interessante Arten. Wenn Dateien in git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Dies ermöglicht es git, die Daten schnell zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Inhalt der Datei für den Hash, sondern fügt ihm auch die UTF8-Zeichenkette `"blob "` voran, gefolgt von der Dateigröße in Bytes, in Dezimalschreibweise geschrieben, gefolgt vom Null-Zeichen (das in JavaScript als `"\0"` geschrieben werden kann). Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu codieren, da Zeichenketten in JavaScript UTF16 sind.

Der unten stehende Code, ähnlich unserem SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu erzeugen. Das Upload-HTML bleibt gleich, aber wir leisten zusätzliche Arbeit, um die Größeninformationen auf die gleiche Weise voranzustellen wie git es tut.

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

Beachten Sie, wie es die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet, um den Header zu erzeugen, der mit dem originalen ArrayBuffer verkettet wird, um die zu hashende Zeichenkette zu erzeugen.

## Wie git Commit-Hashes generiert

Interessanterweise erstellt git Commit-Hashes auf ähnliche Weise, basierend auf mehreren Informationen. Dazu können der vorherige Commit-Hash und die Commit-Nachricht gehören, die zusammenkommen, um einen neuen Hash zu bilden. Dieser kann verwendet werden, um Commits zu referenzieren, die auf mehreren eindeutigen Kennungen basieren.

Der Terminalbefehl ist: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [How is git commit sha1 formed](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es die UTF8-Zeichenkette (Null-Zeichen geschrieben als `\0`):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Dies ist großartig, weil keines der einzelnen Felder garantiert einzigartig ist, aber wenn sie zusammengefügt werden, geben sie einen eindeutigen Verweis auf einen einzigen Commit. Allerdings ist die gesamte Zeichenkette zu lang und unhandlich zu verwenden. Durch das Hashen erhalten Sie eine neue eindeutige Zeichenkette, die kurz genug ist, um bequem aus mehreren Feldern zu teilen.

Dies ist der Grund, warum sich der Hash ändert, wenn Sie jemals Ihren Commit geändert haben, selbst wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, was selbst bei einer einzigen Zeichen zu einer vollständigen Änderung des neuen Hashs führt.

Das Fazit hier ist, dass wenn Sie einem Datenobjekt einen Schlüssel hinzufügen möchten, aber keine einzelne Information einzigartig genug ist, dann ist es eine großartige Möglichkeit, mehrere Zeichenfolgen zusammenzuführen und sie zu hashen, um einen nützlichen Schlüssel zu erzeugen.

Hoffentlich haben diese Beispiele Sie ermutigt, einen Blick auf diese neue leistungsstarke API zu werfen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst neu zu erstellen. Es reicht aus, zu wissen, dass die Werkzeuge da sind und einige davon wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
