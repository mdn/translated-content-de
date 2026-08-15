---
title: Nicht-kryptografische Anwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Verwendungen der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle, während das Erstellen von Hashes von Inhalten (was die Digest-Methode tut) sehr viele nützliche Zwecke hat.

Dieser Artikel behandelt nicht die kryptografischen Anwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt, den Sie aus diesem Artikel mitnehmen sollten, ist, dass Sie diese API **nicht für produktionsrelevante kryptografische Zwecke verwenden** sollten, da sie mächtig und auf niedriger Ebene ist. Um sie richtig zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben korrekt auszuführen. Falls einer dieser Schritte falsch durchgeführt wird, wird im besten Fall Ihr Code nicht ausgeführt, im schlimmsten Fall wird er _ausgeführt_ und Sie setzen unbewusst Ihre Benutzer einem Risiko mit einem unsicheren Produkt aus.

Sie müssen möglicherweise nicht einmal die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) verwenden. Viele der Dinge, für die Sie Verschlüsselung verwenden möchten, sind bereits gelöst und Teil der Web-Plattform. Wenn Sie beispielsweise über [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe besorgt sind, wie etwa, dass Wi-Fi-Hotspots die Informationen zwischen dem Client und dem Server lesen, wird dies durch die korrekte Verwendung von {{Glossary("HTTPS", "HTTPS")}} gelöst. Möchten Sie Informationen sicher zwischen Benutzern senden? Dann können Sie eine Datenverbindung zwischen Benutzern unter Verwendung von [WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die Teil des Standards verschlüsselt sind.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet primitive Funktionen für die Arbeit mit Kryptografie, aber die Implementierung eines Systems unter Verwendung dieser Werkzeuge ist eine komplizierte Aufgabe. Fehler sind schwer zu bemerken und die Ergebnisse können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten austauschen.

Falls Sie unsicher sind, versuchen Sie es nicht selbst zu tun, sondern beauftragen Sie jemanden mit Erfahrung und stellen Sie sicher, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Hashing einer Datei

Dies ist das einfachste nützliche, das Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es beinhaltet nicht das Generieren von Schlüsseln oder Zertifikaten und hat nur einen einzigen Schritt.

{{Glossary("Hash_function", "Hashing")}} ist eine Technik, bei der Sie eine große Zeichenfolge von Bytes in eine kleinere Zeichenfolge umwandeln, wobei kleine Änderungen an der langen Zeichenfolge große Änderungen in der kleineren Zeichenfolge bewirken. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien zu überprüfen. Dies ist sehr nützlich, da Sie eine einfache Zeichenfolge zum Vergleichen haben. Zur Klarstellung: Hashing ist eine **einseitige** Operation. Sie können die ursprüngliche Zeichenfolge von Bytes nicht aus dem Hash generieren.

Wenn zwei generierte Hashes gleich sind, die Dateien, die sie jedoch erstellt haben, unterschiedlich waren, wird dies als _Hash-Kollision_ bezeichnet, was extrem unwahrscheinlich ist, dass es zufällig auftritt, und für eine sichere Hash-Funktion wie SHA256 fast unmöglich zu erzeugen ist. Wenn die zwei Zeichenfolgen also gleich sind, können Sie ziemlich sicher sein, dass die zwei ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl zum Hashing von Dateien, aber es gibt [höhergeordnete Hashing-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms), die in der SubtleCrypto-Schnittstelle verfügbar sind. Die häufigste Darstellung eines SHA256-Hashes ist eine Zeichenfolge von 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass es nur die Zeichen 0-9 und a-f verwendet, die 4 Bit Information repräsentieren. Kurz gesagt, ein SHA256-Hash wandelt Daten jeder Länge in nahezu einzigartige 256 Bit Daten um.

Diese Technik wird häufig von Seiten verwendet, die es Ihnen erlauben, ausführbare Dateien herunterzuladen, um sicherzustellen, dass die heruntergeladene Datei der entspricht, die der Autor beabsichtigt hat. Dies stellt sicher, dass Ihre Benutzer keine Malware installieren. Der häufigste Weg, dies zu tun, ist:

1. Notieren Sie sich den Dateinamen und die vom Website bereitgestellte SHA256-Prüfsumme.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /path/to/the/file` im Terminal aus, um Ihren eigenen Code zu erzeugen. Wenn Sie einen Mac verwenden, müssen Sie es möglicherweise [separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenfolgen – sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele für SHA256 vom Download der Software "Blender". Diese sehen aus wie 64 hexadezimale Ziffern, gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist dafür nützlich. Um eine Prüfsumme einer Datei zu erzeugen, können Sie es wie folgt tun:

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

Als Nächstes verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert durch:

- Lesen der Dateien in ein {{jsxref("ArrayBuffer")}} mit der [`File`](/de/docs/Web/API/File)-Objektmethode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer).
- Verwenden von `crypto.subtle.digest('SHA-256', arrayBuffer)`, um den ArrayBuffer zu hashen.
- Konvertieren des resultierenden Hashes (ein weiteres ArrayBuffer) in eine Zeichenfolge, sodass sie angezeigt werden kann.

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

An diesem Punkt denken Sie vielleicht: "_Ich kann dies auf meiner eigenen Website verwenden, sodass wenn Benutzer eine Datei herunterladen, wir sicherstellen können, dass die Hashes übereinstimmen, um den Benutzer zu beruhigen, dass ihr Download sicher ist_". Leider gibt es zwei Probleme, die uns direkt in den Sinn kommen:

- Downloads ausführbarer Dateien sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Zwischenparteien Angriffe wie diesen ausführen, sodass es überflüssig wäre.
- Wenn der Angreifer in der Lage ist, die Download-Datei auf dem ursprünglichen Server zu ersetzen, kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um dies zu umgehen und einfach anzugeben, dass alles in Ordnung ist. Wahrscheinlich etwas Heimliches wie das Ersetzen von [strikter Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu erkennen ist:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sich lohnen könnte, ist, wenn Sie eine Datei von einer Drittanbieterdatenquelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Standort {{Glossary("CORS", "CORS")}}-Header aktiviert hat, um Ihnen zu erlauben, die Datei zu scannen, bevor Sie sie Ihren Benutzern zur Verfügung stellen. Leider haben nicht viele Server standardmäßig CORS aktiviert.

## Was bedeutet "Den Hash salzen"?

Ein Ausdruck, den Sie vielleicht schon einmal gehört haben, ist _"Den Hash salzen"_. Es ist nicht sofort relevant für unsere Themen, aber es ist gut, darüber Bescheid zu wissen.

> [!NOTE]
> Dieser Abschnitt spricht über Passwortsicherheit und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure, langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, ziemlich schnell und effizient zu sein, was es ungeeignet für die Passwort-Hashing macht. Dieser Abschnitt ist rein zu Ihrer Information — verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Eine beliebte Anwendung des Hashings ist das Speichern von Passwörtern. Sie sollten niemals das Passwort eines Benutzers im Klartext speichern, das ist einfach eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Passworts des Benutzers, sodass das Original-Passwort nicht wiederhergestellt werden kann, falls ein Hacker Ihren Benutzernamen- und Passwort-Datenbank erlangt. Die aufmerksamen unter Ihnen bemerken vielleicht, dass Sie trotzdem die ursprünglichen Passwörter herausfinden können, indem Sie die Hashes mit Listen bekannter Passwörter vergleichen, die gegen die erlangte Passwort-Hash-Liste gehalten werden. Das Verkettung eines Strings mit den Passwörtern ändert den Hash, sodass er nicht mehr übereinstimmt. Dies wird als **Salting** bezeichnet. Ein weiteres problematisches Problem ist, dass wenn Sie das gleiche Salt für jedes Passwort verwenden, dann Passwörter mit übereinstimmenden Hashes auch dieselben Original-Passwörter sind. Wenn Sie also eines kennen, kennen Sie alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, führen Sie das sogenannte _Salting des Hashes_ durch. Für jedes Passwort generieren Sie ein Salt (eine zufällige Zeichenfolge) und verketteten es mit der Passwortzeichenfolge. Sie speichern dann den Hash und das Salt in derselben Datenbank, sodass Sie bei einem späteren Login-Versuch einen Abgleich durchführen können. Dies bedeutet, dass wenn zwei Benutzer dasselbe Passwort verwenden, die Hashes unterschiedlich sind. Deshalb benötigen Sie eine teure kryptografische Funktion, damit es zu zeitaufwendig ist, Listen von häufig verwendeten Passwörtern zu verwenden, um die ursprünglichen Passwörter herauszufinden.

## Hashtabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht kryptografisch sichere Hashes zu erzeugen. Diese sind unglaublich nützlich, um einige beliebige Daten in einen Schlüssel zu verwandeln, den Sie später nachschlagen können.

Zum Beispiel, wenn Sie eine Datenbank haben möchten, die ein großes Datenpaket als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, da eines der Felder entweder variabler Länge sein muss oder groß genug, um das größte mögliche Datenpaket zu speichern. Eine alternative Lösung ist, einen Hash des Pakets zu erzeugen und ihn in einer separaten Nachschlagetabelle zu speichern, wobei der Hash als Index verwendet wird. Dann können Sie nur den Hash in Ihrer ursprünglichen Datenbank speichern, der eine schöne fixe Länge hat.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es fast unmöglich ist, zufällig zwei Pakete mit demselben SHA1-Hash zu erzeugen. Es _ist_ möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erzeugen, da SHA1 kryptografisch nicht sicher ist. Ein bösartiger Benutzer könnte theoretisch ein Datenpaket erzeugen, das das Original in der Datenbank ersetzt, was unentdeckt bleibt, weil der Hash gleich ist. Dies ist ein Angriffsvektor, dessen Sie sich bewusst sein sollten.

## Wie Git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein großartiges Beispiel – es verwendet Hashes auf zwei interessante Arten. Wenn Dateien in Git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Dies macht es Git schnell, die Daten zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Dateinhalt für den Hash, sondern fügt auch die UTF8-Zeichenkette `"blob "` voran, gefolgt von der Dateigröße in Bytes, die im Dezimalformat geschrieben und durch das Nullzeichen (das in JavaScript als `"\0"` geschrieben werden kann) abgeschlossen wird. Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu kodieren, da Zeichenfolgen in JavaScript UTF16 sind.

Der Code unten, ähnlich unserem SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu erzeugen. Die HTML-Datei-Upload bleibt gleich, aber wir leisten zusätzliche Arbeit, um die Größeninformationen in der gleichen Weise wie Git voranzustellen.

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

Beachten Sie, wie die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet wird, um den Header zu produzieren, der mit dem ursprünglichen ArrayBuffer verkettet wird, um die zu hashende Zeichenfolge zu erstellen.

## Wie Git Commit-Hashes erzeugt

Interessanterweise erzeugt git auch Commit-Hashes auf ähnliche Weise, basierend auf mehreren Informationsstücken. Diese können den vorherigen Commit-Hash und die Commit-Nachricht enthalten, die zusammenkommen, um einen neuen Hash zu bilden. Dieser kann genutzt werden, um Commits zu referenzieren, die auf mehreren einzigartigen Kennungen basieren.

Der Terminalbefehl ist: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [Wie wird ein git-Commit-SHA1 gebildet](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es die UTF8-Zeichenkette (Null-Zeichen als `\0` geschrieben):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Dies ist großartig, weil keines der individuellen Felder garantiert einzigartig ist, wenn sie aber zusammengefügt werden, ergeben sie einen einzigartigen Verweis auf einen einzelnen Commit. Allerdings ist die gesamte Zeichenfolge zu lang und unhandlich, um verwendet zu werden. Durch das Hashing erhalten Sie jedoch eine neue einzigartige Zeichenfolge, die kurz genug ist, um bequem von mehreren Feldern geteilt zu werden.

Deshalb ändert sich der Hash, wenn Sie Ihren Commit jemals geändert haben, selbst wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, was auch nur durch ein einzelnes Zeichen ausreicht, um den neuen Hash völlig zu ändern.

Das Fazit daraus ist, dass wenn Sie einen Schlüssel zu einigen Daten hinzufügen wollen, aber kein einzelnes Stück Information einzigartig genug ist, dann ist das Verketteten mehrerer Zeichenfolgen und deren Hashing eine großartige Möglichkeit, um einen nützlichen Schlüssel zu erzeugen.

Hoffentlich haben Sie durch diese Beispiele die Neugier geweckt, sich diese neue leistungsstarke API anzusehen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst zu rekonstruieren. Es reicht zu wissen, dass die Werkzeuge da sind und dass einige von ihnen, wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion, nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
