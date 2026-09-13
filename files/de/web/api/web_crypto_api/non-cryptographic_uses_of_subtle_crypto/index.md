---
title: Nicht-kryptografische Verwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Verwendung der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle, aber das Erstellen von Hashes von Inhalten (was die Digest-Methode tut) hat viele nützliche Zwecke.

Dieser Artikel behandelt nicht die kryptografischen Verwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Eine wichtige Erkenntnis aus diesem Artikel ist, dass Sie **diese API nicht** für produktionsreife kryptografische Zwecke verwenden sollten, da sie mächtig und auf niedriger Ebene ist. Um sie korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben richtig auszuführen. Wenn einer dieser Schritte falsch gemacht wird, läuft Ihr Code im besten Fall nicht, im schlimmsten Fall läuft er und Sie setzen Ihre Benutzer unwissentlich einem Risiko durch ein unsicheres Produkt aus.

Möglicherweise müssen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht verwenden. Viele der Dinge, für die Sie Kryptografie verwenden möchten, sind bereits gelöst und Teil der Web-Plattform. Zum Beispiel, wenn Sie sich Sorgen über [Manipulator-in-der-Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe machen, wie z. B. Wi-Fi-Hotspots, die Informationen zwischen dem Client und dem Server ablesen, wird dies durch die korrekte Verwendung von {{Glossary("HTTPS", "HTTPS")}} gelöst. Möchten Sie Informationen sicher zwischen Benutzern senden? Dann können Sie eine Datenverbindung zwischen Benutzern über [WebRTC-Datenkanäle](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die im Standard verschlüsselt sind.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet grundlegende Primitive für die Arbeit mit Kryptografie, aber die Implementierung eines Systems mit diesen Tools ist eine komplizierte Aufgabe. Fehler sind schwer zu bemerken, und die Ergebnisse können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten teilen.

Wenn Sie unsicher sind, versuchen Sie es nicht selbst, stellen Sie jemanden mit Erfahrung ein und sorgen Sie dafür, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Hashen einer Datei

Dies ist das einfachste, nützliche, was Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es erfordert nicht das Erstellen von Schlüsseln oder Zertifikaten und hat nur einen einzigen Schritt.

{{Glossary("Hash_function", "Hashing")}} ist eine Technik, bei der Sie eine lange Zeichenkette von Bytes in eine kürzere Zeichenkette umwandeln, wobei kleine Änderungen an der langen Zeichenkette zu großen Änderungen in der kürzeren Zeichenkette führen. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien zu überprüfen. Dies ist sehr nützlich, da Sie eine einfache Zeichenkette zum Vergleichen haben. Klarzustellen ist, dass das Hashing eine **einseitige** Operation ist. Sie können die ursprüngliche Zeichenkette von Bytes nicht aus dem Hash generieren.

Wenn zwei generierte Hashes identisch sind, die Dateien, die sie erzeugt haben, jedoch unterschiedlich sind, spricht man von einer _Hash-Kollision_, was extrem unwahrscheinlich ist, zufällig zu passieren, und bei einer sicheren Hash-Funktion wie SHA256 fast unmöglich herzustellen. Wenn also die beiden Zeichenketten identisch sind, können Sie sich ziemlich sicher sein, dass die beiden ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl zum Hashing von Dateien, aber es gibt [höherwertige Hashing-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms) in der SubtleCrypto-Schnittstelle. Die häufigste Darstellung eines SHA256-Hashes ist eine Zeichenkette aus 64 hexadezimalen Zeichen. Hexadezimal bedeutet, dass es nur die Zeichen 0-9 und a-f verwendet und jeweils 4 Bits an Information darstellt. Kurz gesagt, ein SHA256-Hash verwandelt beliebig lange Daten in fast einzigartige 256 Bits von Daten.

Diese Technik wird häufig von Websites verwendet, die ausführbare Dateien zum Herunterladen bereitstellen, um sicherzustellen, dass die heruntergeladene Datei der Datei entspricht, die der Autor vorgesehen hat. Dies stellt sicher, dass Ihre Benutzer keine Malware installieren. Der häufigste Ablauf, um dies zu tun, ist:

1. Notieren Sie den Dateinamen und die SHA256-Prüfsumme, die von der Website bereitgestellt wird.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /Pfad/zu/der/Datei` im Terminal aus, um Ihren eigenen Code zu generieren. Wenn Sie einen Mac verwenden, müssen Sie möglicherweise [dies separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenketten – sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele von SHA256 aus dem Download der Software "Blender". Diese sehen aus wie 64 hexadezimale Ziffern gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist dafür nützlich. Um eine Prüfsumme einer Datei zu generieren, können Sie dies so tun:

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

- Die Dateien mit der [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer)-Methode des [`File`](/de/docs/Web/API/File)-Objekts in ein {{jsxref("ArrayBuffer")}} gelesen werden.
- Verwenden Sie `crypto.subtle.digest('SHA-256', arrayBuffer)`, um den ArrayBuffer zu hashen.
- Konvertieren Sie den resultierenden Hash (ein weiteres ArrayBuffer) in eine Zeichenkette, damit er angezeigt werden kann.

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

An diesem Punkt fragen Sie sich vielleicht: "_Ich kann dies auf meiner eigenen Website verwenden, damit wir sicherstellen können, dass die Hashes übereinstimmen, um den Benutzer zu beruhigen, dass sein Download sicher ist_". Unglücklicherweise hat dies zwei Probleme, die sofort in den Sinn kommen:

- Ausführbare Downloads sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Zwischenparteien Angriffe dieser Art ausführen, daher wäre es überflüssig.
- Wenn der Angreifer in der Lage ist, die heruntergeladene Datei auf dem ursprünglichen Server zu ersetzen, kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um dies zu umgehen und einfach zu erklären, dass alles in Ordnung ist. Wahrscheinlich etwas Unauffälliges wie das Ersetzen von [strikter Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using), was schwierig zu erkennen sein kann:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sinnvoll sein könnte, ist, wenn Sie eine Datei von einer externen Download-Quelle testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Speicherort {{Glossary("CORS", "CORS")}}-Header aktiviert hat, um Ihnen das Scannen der Datei zu ermöglichen, bevor Sie sie Ihren Benutzern zur Verfügung stellen. Leider haben nicht viele Server CORS standardmäßig aktiviert.

## Was ist "Salting the Hash"?

Ein Satz, den Sie vielleicht schon gehört haben, ist _"Salting the hash"_. Es ist nicht sofort relevant für unsere aktuellen Themen, aber es ist gut, darüber Bescheid zu wissen.

> [!NOTE]
> Dieser Abschnitt behandelt die Passwortsicherheit und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure, langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist darauf ausgelegt, ziemlich schnell und effizient zu sein, was es ungeeignet für Passwort-Hashing macht. Dieser Abschnitt dient rein Ihrem Interesse – verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Eine beliebte Anwendung für das Hashing sind Passwörter, Sie sollten niemals das Passwort eines Benutzers im Klartext speichern, das ist einfach eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Benutzerpassworts, damit das ursprüngliche Passwort nicht wiederhergestellt werden kann, sollte ein Hacker Ihren Benutzernamen und Ihre Passwortdatenbank erlangen. Die Adleraugen unter Ihnen werden vielleicht bemerken, dass Sie immer noch die ursprünglichen Passwörter herausfinden können, indem Sie die Hashes aus Listen bekannter Passwörter mit der erlangten Passwort-Hash-Liste vergleichen. Durch das Anhängen einer Zeichenkette an die Passwörter ändert sich der Hash so, dass er nicht mehr übereinstimmt. Dies ist bekannt als **Salting**. Ein weiteres kniffliges Problem ist, dass, wenn Sie das gleiche Salt für jedes Passwort verwenden, dann Passwörter mit übereinstimmenden Hashes auch das gleiche ursprüngliche Passwort sind. Wenn Sie also eines kennen, kennen Sie alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, führen Sie das sogenannte _Salting the Hash_ durch. Für jedes Passwort generieren Sie ein Salt (eine zufällige Zeichenkette) und verketten es mit der Passwortzeichenkette. Sie speichern dann den Hash und das Salt in derselben Datenbank, damit Sie bei einer späteren Anmeldung des Benutzers eine Übereinstimmung überprüfen können. Dies bedeutet, dass, wenn zwei Benutzer das gleiche Passwort verwenden, die Hashes unterschiedlich sein werden. Daher der Grund, warum Sie eine teure kryptografische Funktion benötigen, damit es zu zeitaufwändig ist, um Listen gängiger Passwörter zu verwenden, um herauszufinden, was die ursprünglichen Passwörter waren.

## Hashtabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht-kryptografisch sichere Hashes zu generieren. Diese sind unglaublich nützlich, um einige beliebige Daten in einen Schlüssel zu verwandeln, den Sie später wieder nachschlagen können.

Zum Beispiel, wenn Sie eine Datenbank haben möchten, die ein großes Datenstück als eines der Felder in einer Reihe enthält. Dies verringert die Effizienz Ihrer Datenbank, da eines der Felder entweder variabler Länge sein muss oder groß genug, um das größte mögliche Datenstück zu speichern. Eine alternative Lösung besteht darin, einen Hash des Datenstücks zu erzeugen und ihn in einer separaten Nachschlagetabelle unter dem Hash als Index zu speichern. Dann können Sie nur den Hash in Ihrer ursprünglichen Datenbank speichern, was eine schöne feste Länge hat.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es fast unmöglich ist, zufällig zwei Datenstücke mit demselben SHA1-Hash zu erzeugen. Es _ist_ jedoch möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erzeugen, da SHA1 nicht kryptografisch sicher ist. Ein böswilliger Benutzer könnte theoretisch einen Datenblock erzeugen, der das Original in der Datenbank ersetzt und unentdeckt bleibt, weil der Hash derselbe ist. Dies ist eine Angriffsfläche, derer man sich bewusst sein sollte.

## Wie git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein großartiges Beispiel. Es verwendet Hashes auf zwei interessante Weisen. Wenn Dateien in Git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Das macht es für Git schnell, die Daten zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur den Dateiinhalt für den Hash, sondern fügt auch die UTF8-Zeichenkette `"blob "` hinzu, gefolgt von der Dateigröße in Bytes, die in Dezimalzahlen angegeben ist, gefolgt vom Nullzeichen (das in JavaScript als `"\0"` geschrieben werden kann). Sie können die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu kodieren, da Zeichenketten in JavaScript UTF16 sind.

Der folgende Code kann, ähnlich wie unser SHA256-Beispiel, verwendet werden, um diese Hashes aus Dateien zu generieren. Das HTML zum Hochladen von Dateien bleibt dasselbe, aber wir müssen etwas zusätzliche Arbeit leisten, um die Größeninformationen in derselben Weise wie Git voranzustellen.

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

Beachten Sie, wie es die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet, um den Header zu erzeugen, der mit dem ursprünglichen ArrayBuffer verkettet wird, um die zu hashende Zeichenkette zu erzeugen.

## Wie git Commit-Hashes generiert

Interessanterweise generiert git auch Commit-Hashes auf ähnliche Weise, basierend auf mehreren Informationsstücken. Diese können den vorherigen Commit-Hash und die Commit-Nachricht beinhalten, die zusammen einen neuen Hash erzeugen. Dieser kann verwendet werden, um Commits zu referenzieren, die auf mehreren eindeutigen Identifikatoren basieren.

Der Terminalbefehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [Wie ist der git-Commit-Sha1 aufgebaut](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es die UTF8-Zeichenkette (Nullzeichen geschrieben als `\0`):

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Dies ist großartig, weil keines der einzelnen Felder garantiert einzigartig ist, aber wenn sie zusammen kombiniert werden, geben sie einen einzigartigen Zeiger auf einen einzigen Commit. Allerdings ist die gesamte Zeichenkette zu lang und unhandlich für den Gebrauch. Durch das Hashen erhalten Sie daher eine neue eindeutige Zeichenkette, die kurz genug ist, um bequem von mehreren Feldern aus geteilt zu werden.

Deshalb ändert sich der Hash, wenn Sie jemals Ihren Commit bearbeitet haben, selbst wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, was selbst bei einem einzigen Zeichen genügt, um den neuen Hash völlig zu ändern.

Die Erkenntnis daraus ist, dass wenn Sie einen Schlüssel zu einigen Daten hinzufügen möchten, aber keines der Einzelinformationen einzigartig genug ist, dann das Verketten mehrerer Zeichenketten und deren Hashing eine großartige Möglichkeit ist, einen nützlichen Schlüssel zu generieren.

Hoffentlich haben Sie diese Beispiele dazu ermutigt, sich diese neue mächtige API näher anzusehen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst zu erstellen. Es genügt zu wissen, dass die Werkzeuge vorhanden sind, und einige davon wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion sind nützliche Werkzeuge für Ihre tägliche Entwicklung.
