---
title: Nicht-kryptografische Anwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 330d1ecc08158d6f307b98532b810afef1acd3c3
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Verwendung der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle. Das Erstellen von Hashes von Inhalten (was die Digest-Methode tut) hat jedoch viele nützliche Zwecke.

Dieser Artikel behandelt nicht die kryptografische Verwendung der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt, den Sie aus diesem Artikel mitnehmen sollten, ist, dass Sie diese API **nicht für produktionsreife kryptografische Zwecke verwenden sollten**, da sie leistungsfähig und auf niedrigem Niveau ist. Um sie korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben richtig auszuführen. Wenn einer dieser Schritte falsch ausgeführt wird, wird Ihr Code im besten Fall nicht ausgeführt; im schlimmsten Fall wird er ausgeführt und Sie setzen Ihre Benutzer unwissentlich einem Risiko mit einem unsicheren Produkt aus.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele der Dinge, für die Sie Kryptografie verwenden möchten, sind bereits gelöst und Teil der Webplattform. Wenn Sie sich zum Beispiel um Man-in-the-Middle-Angriffe sorgen, wie Wi-Fi-Hotspots, die Informationen zwischen dem Client und dem Server lesen, wird dies durch die korrekte Verwendung von {{Glossary("HTTPS", "HTTPS")}} gelöst. Möchten Sie Informationen sicher zwischen Benutzern senden? Dann können Sie eine Datenverbindung zwischen Benutzern mithilfe von [WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die als Teil des Standards verschlüsselt sind.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet primitive Werkzeuge für die Arbeit mit Kryptografie, aber das Implementieren eines Systems mit diesen Werkzeugen ist eine komplizierte Aufgabe. Fehler sind schwer zu bemerken, und die Ergebnisse können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten austauschen.

Wenn Sie Zweifel haben, versuchen Sie nicht, es selbst zu tun. Beauftragen Sie jemanden mit Erfahrung und stellen Sie sicher, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Einen Datei-Hash erstellen

Dies ist die einfachste nützliche Sache, die Sie mit der [Web Crypto API](/de/docs/Web_API/Web_Crypto_API) tun können. Es erfordert weder das Erzeugen von Schlüsseln noch Zertifikaten und hat nur einen einzigen Schritt.

{{Glossary("Hash", "Hashing")}} ist eine Technik, bei der Sie einen großen Byte-String in einen kleineren String umwandeln, wobei kleine Änderungen an dem langen String zu großen Änderungen im kleineren String führen. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien zu überprüfen. Dies ist sehr nützlich, da Sie einen einfachen String zum Vergleichen haben. Um klar zu sein, ist Hashing eine **einseitige** Operation. Sie können den ursprünglichen Byte-String nicht aus dem Hash generieren.

Wenn zwei generierte Hashes identisch sind, die Dateien, die zur Generierung verwendet wurden, jedoch unterschiedlich sind, spricht man von einem _Hash-Kollision_, was etwas äußerst Unwahrscheinliches ist und für eine sichere Hash-Funktion wie SHA256 fast unmöglich zu erzeugen. Wenn also die beiden Strings identisch sind, können Sie ziemlich sicher sein, dass die beiden Originaldateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl zum Hashing von Dateien, aber es gibt [höherwertige Hash-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms), die in der SubtleCrypto-Schnittstelle verfügbar sind. Die häufigste Darstellung eines SHA256-Hashes ist ein String aus 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass er nur die Zeichen 0-9 und a-f verwendet, die jeweils 4 Bit Informationen darstellen. Kurz gesagt, ein SHA256-Hash verwandelt Daten beliebiger Länge in fast einzigartige 256 Bit Daten.

Diese Technik wird häufig von Websites verwendet, die Sie ausführbare Dateien herunterladen lassen, um sicherzustellen, dass die heruntergeladene Datei mit der vom Autor beabsichtigten übereinstimmt. Dies gewährleistet, dass Ihre Benutzer keine Malware installieren. Die gängigste Methode, dies zu tun, ist:

1. Notieren Sie den Dateinamen und die SHA256-Prüfsumme, die von der Website bereitgestellt wird.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /Pfad/zur/Datei` im Terminal aus, um Ihren eigenen Code zu generieren. Wenn Sie einen Mac verwenden, müssen Sie ihn möglicherweise [separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Strings – sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele für SHA256 aus dem Download der Software "Blender". Diese sehen aus wie 64 hexadezimale Ziffern, gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist hierfür nützlich. Um eine Prüfsumme einer Datei zu generieren, können Sie wie folgt vorgehen:

Zuerst fügen wir einige HTML-Elemente hinzu, um einige Dateien zu laden und die SHA-256-Ausgabe anzuzeigen:

```html
<h3>Demonstration of hashing a file with SHA256</h3>

<label
  >Choose file(s) to hash <input type="file" id="file" name="file" multiple
/></label>
<output style="display:block;font-family:monospace;"></output>
```

Als Nächstes verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert folgendermaßen:

- Lesen der Dateien in ein {{jsxref("ArrayBuffer")}} mit der [`File`](/de/docs/Web/API/File)-Objekt-Methode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer).
- Verwendung von `crypto.subtle.digest('SHA-256', arrayBuffer)`, um das ArrayBuffer zu verarbeiten
- Konvertieren des resultierenden Hashs (ein weiteres ArrayBuffer) in einen String, damit er angezeigt werden kann

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

An diesem Punkt denken Sie vielleicht: "_Ich kann dies auf meiner eigenen Website verwenden, damit wir beim Herunterladen einer Datei sicherstellen können, dass die Hashes übereinstimmen, um den Benutzer zu beruhigen, dass sein Download sicher ist_". Leider gibt es zwei Probleme, die sofort ins Auge springen:

- Ausführbare Downloads sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Zwischenparteien Angriffe wie diesen durchführen, sodass es überflüssig wäre.
- Wenn der Angreifer in der Lage ist, die herunterzuladende Datei auf dem ursprünglichen Server zu ersetzen, kann er einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um sie zu umgehen, und einfach sagen, dass alles in Ordnung ist. Wahrscheinlich etwas Heimtückisches wie das Ersetzen der [strengen Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu erkennen sein kann:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sich lohnen könnte, ist, wenn Sie eine Datei von einer Drittanbieter-Downloadquelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Ort {{Glossary("CORS", "CORS")}}-Header aktiviert hat, um Ihnen zu ermöglichen, die Datei zu scannen, bevor Sie sie Ihren Benutzern zur Verfügung stellen. Leider haben nicht viele Server standardmäßig CORS aktiviert.

## Was bedeutet "Salting the Hash"?

Ein Ausdruck, den Sie vielleicht schon einmal gehört haben, ist _"Salting the Hash"_. Er ist nicht unmittelbar relevant für die aktuellen Themen, aber es ist gut, darüber Bescheid zu wissen.

> [!NOTE]
> Dieser Abschnitt spricht über Passwortsicherheit und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, ziemlich schnell und effizient zu sein, was ihn ungeeignet für Passwort-Hashing macht. Dieser Abschnitt dient rein zu Ihrer Information – verwenden Sie die Web Crypto API nicht zum Hashen von Passwörtern auf dem Client.

Ein beliebter Anwendungsfall für Hashing ist Passwörter. Sie sollten niemals das Passwort eines Benutzers im Klartext speichern; das ist einfach eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Benutzerpassworts, sodass das ursprüngliche Passwort nicht wiederhergestellt werden kann, sollte ein Hacker Zugriff auf Ihre Benutzername- und Passwort-Datenbank erhalten. Die scharfsinnigen unter Ihnen haben vielleicht bemerkt, dass Sie immer noch die ursprünglichen Passwörter herausfinden können, indem Sie die Hashes mit Listen bekannter Passwörter vergleichen. Durch das Verketteten eines Strings an die Passwörter ändert sich der Hash, sodass er nicht mehr übereinstimmt. Dies wird als **Salting** bezeichnet. Ein weiteres kniffliges Problem ist, dass, wenn Sie das gleiche Salt für jedes Passwort verwenden, Passwörter mit übereinstimmenden Hashes das gleiche Ursprungs-Passwort sein werden. Wenn Sie also eines kennen, kennen Sie alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, führen Sie das sogenannte _Salting the Hash_ durch. Für jedes Passwort generieren Sie ein Salt (eine zufällige Zeichenkette) und fügen es dem Passwort-String hinzu. Sie speichern dann den Hash und das Salt in derselben Datenbank, sodass Sie bei späteren Versuchen des Benutzers, sich anzumelden, einen Abgleich durchführen können. Dies bedeutet, dass, wenn zwei Benutzer dasselbe Passwort verwenden, die Hashes unterschiedlich sein werden. Daher benötigen Sie eine teure kryptografische Funktion, um sicherzustellen, dass es zu zeitaufwändig wird, Listen mit allgemeinen Passwörtern zu verwenden, um herauszufinden, was die ursprünglichen Passwörter waren.

## Hash-Tabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht-kryptografisch sichere Hashes zu generieren. Diese sind unglaublich nützlich, um einige beliebige Daten in einen Schlüssel umzuwandeln, den Sie später nachschlagen können.

Zum Beispiel, wenn Sie eine Datenbank haben möchten, die ein großes Daten-Blob als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, da eines der Felder entweder variabler Länge sein muss oder groß genug sein muss, um das größtmögliche Blob zu speichern. Eine alternative Lösung ist es, einen Hash des Blobs zu generieren und ihn in einer separaten Nachschlagetabelle zu speichern, wobei der Hash als Index verwendet wird. Sie können dann nur den Hash in Ihrer ursprünglichen Datenbank speichern, der eine schöne feste Länge hat.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es fast unmöglich ist, versehentlich zwei Blobs mit demselben SHA1-Hash zu erstellen. Es _ist_ möglich, absichtlich zwei Dateien mit dem gleichen SHA1-Hash zu erzeugen, da SHA1 nicht kryptografisch sicher ist. Ein böswilliger Benutzer könnte theoretisch ein Daten-Blob generieren, das das Original in der Datenbank ersetzt, das unentdeckt bleibt, weil der Hash identisch ist. Dies ist ein Angriffsvektor, dessen Sie sich bewusst sein sollten.

## Wie Git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein großartiges Beispiel. Es verwendet Hashes auf zwei interessante Arten. Wenn Dateien in Git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Dies macht es für Git schnell, die Daten zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Dateiinhalts für den Hash, sondern fügt auch den UTF8-String `"blob "`, gefolgt von der Dateigröße in Dezimalzahlen und dem Nullzeichen (das in JavaScript als `"\0"` geschrieben werden kann) hinzu. Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu kodieren, da Zeichenketten in JavaScript UTF16 sind.

Der folgende Code, ähnlich unserem SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu generieren. Das HTML zum Hochladen von Dateien bleibt gleich, aber wir machen einige zusätzliche Schritte, um die Größeninformationen auf die gleiche Weise wie Git voranzustellen.

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

Beachten Sie, wie die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet wird, um den Header zu erzeugen, der mit dem ursprünglichen ArrayBuffer verkettet wird, um den String zu erzeugen, der gehasht werden soll.

## Wie Git Commit-Hashes generiert

Interessanterweise generiert Git auch Commit-Hashes auf ähnliche Weise, basierend auf mehreren Informationen. Diese können den vorherigen Commit-Hash und die Commit-Nachricht umfassen, die zusammen einen neuen Hash bilden. Dies kann verwendet werden, um Commits zu referenzieren, die auf mehreren eindeutigen Identifikatoren basieren.

Der Terminalbefehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [How is git commit sha1 formed](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es der UTF8-String (Nullzeichen als `\0` geschrieben):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Dies ist großartig, weil keines der einzelnen Felder garantiert einzigartig ist, aber wenn sie zusammen kombiniert werden, geben sie einen eindeutigen Zeiger auf einen einzelnen Commit. Der gesamte String ist jedoch zu lang und unhandlich, um ihn zu verwenden. Durch das Hashing erhalten Sie jedoch einen neuen einzigartigen String, der kurz genug ist, um bequem aus mehreren Feldern geteilt zu werden.

Deshalb ändert sich der Hash, wenn Sie jemals Ihren Commit geändert haben, selbst wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, was selbst durch ein einzelnes Zeichen ausreichend ist, um den neuen Hash vollständig zu ändern.

Das Fazit ist, dass, wenn Sie einen Schlüssel zu einigen Daten hinzufügen möchten, aber keine einzelne Information ausreichend einzigartig ist, das Konkatenieren mehrerer Zeichenfolgen und das Hashen derselben eine großartige Möglichkeit ist, einen nützlichen Schlüssel zu erzeugen.

Hoffentlich haben diese Beispiele Sie dazu ermutigt, sich diese neue leistungsfähige API anzusehen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst nachzubilden. Es reicht aus, zu wissen, dass die Werkzeuge vorhanden sind und einige davon, wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion, nützliche Werkzeuge für Ihre alltägliche Entwicklung sind.
