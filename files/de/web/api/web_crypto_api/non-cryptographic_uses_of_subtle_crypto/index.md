---
title: Nicht-kryptografische Anwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel befasst sich mit Anwendungen der Methode [`digest`](/de/docs/Web/API/SubtleCrypto/digest) der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle. Das Erstellen von Hashes aus Inhalten – genau das tut die Methode `digest` – ist dagegen für viele Zwecke nützlich.

Dieser Artikel behandelt nicht die kryptografischen Anwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Eine wichtige Erkenntnis aus diesem Artikel lautet: **Verwenden Sie diese API nicht** für kryptografische Zwecke in Produktionsumgebungen. Sie ist leistungsfähig und arbeitet auf niedriger Ebene. Um kryptografische Aufgaben damit korrekt zu lösen, müssen Sie viele kontextabhängige Schritte richtig ausführen. Wenn einer dieser Schritte fehlerhaft ist, funktioniert Ihr Code im besten Fall nicht. Im schlimmsten Fall funktioniert er _doch_, während Sie Ihre Nutzer unwissentlich durch ein unsicheres Produkt gefährden.

Möglicherweise benötigen Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) überhaupt nicht. Für viele Aufgaben, bei denen Sie Kryptografie einsetzen möchten, bietet die Webplattform bereits Lösungen. Wenn Sie beispielsweise befürchten, dass bei [Man-in-the-Middle-Angriffen (MITM)](/de/docs/Web/Security/Attacks/MITM) etwa an WLAN-Hotspots Informationen zwischen Client und Server mitgelesen werden, lässt sich dem durch die korrekte Verwendung von {{Glossary("HTTPS", "HTTPS")}} begegnen. Möchten Sie Informationen sicher zwischen Nutzern übertragen? Dann können Sie mithilfe von [WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels) eine Datenverbindung zwischen ihnen aufbauen. Die Verschlüsselung ist dabei Teil des Standards.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) stellt grundlegende Bausteine für die Arbeit mit Kryptografie bereit. Ein System mit diesen Werkzeugen zu implementieren, ist jedoch kompliziert. Fehler sind schwer zu erkennen und können dazu führen, dass die Daten Ihrer Nutzer weniger sicher sind, als Sie glauben. Wenn Ihre Nutzer sensible oder wertvolle Daten austauschen, kann das katastrophale Folgen haben.

Wenn Sie Zweifel haben, versuchen Sie es nicht selbst: Beauftragen Sie eine erfahrene Fachkraft und lassen Sie Ihre Software von einem Sicherheitsexperten überprüfen.

## Eine Datei hashen

Dies ist die einfachste nützliche Anwendung der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API). Sie erfordert weder Schlüssel noch Zertifikate und besteht aus nur einem Schritt.

{{Glossary("Hash_function", "Hashing")}} ist ein Verfahren, bei dem eine lange Bytefolge in eine kürzere Zeichenfolge umgewandelt wird. Kleine Änderungen an der ursprünglichen Bytefolge bewirken dabei große Änderungen an der kürzeren Zeichenfolge. So können Sie feststellen, ob zwei Dateien identisch sind, ohne jedes Byte beider Dateien vergleichen zu müssen. Stattdessen vergleichen Sie einfach zwei Zeichenfolgen. Wichtig ist: Hashing funktioniert **nur in eine Richtung**. Aus einem Hash lässt sich die ursprüngliche Bytefolge nicht wiederherstellen.

Wenn zwei unterschiedliche Dateien denselben Hash ergeben, spricht man von einer _Hash-Kollision_. Dass dies zufällig geschieht, ist äußerst unwahrscheinlich. Bei einer sicheren Hash-Funktion wie SHA256 ist es nahezu unmöglich, eine solche Kollision gezielt herbeizuführen. Stimmen zwei Hashes überein, können Sie daher mit gutem Grund davon ausgehen, dass die ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl zum Hashen von Dateien. In der SubtleCrypto-Schnittstelle stehen jedoch auch [Hash-Funktionen mit längeren Hashwerten](/de/docs/Web/API/SubtleCrypto#supported_algorithms) zur Verfügung. Ein SHA256-Hash wird meist als Zeichenfolge aus 64 hexadezimalen Ziffern dargestellt. Hexadezimal bedeutet, dass nur die Zeichen 0–9 und a–f verwendet werden; jedes davon stellt 4 Bit an Information dar. Kurz gesagt: SHA256 wandelt Daten beliebiger Länge in einen nahezu eindeutigen Wert von 256 Bit um.

Websites, auf denen ausführbare Dateien heruntergeladen werden können, verwenden dieses Verfahren häufig, um sicherzustellen, dass die heruntergeladene Datei mit der vom Anbieter vorgesehenen Datei übereinstimmt. Das hilft zu verhindern, dass Nutzer Schadsoftware installieren. Üblicherweise gehen Sie so vor:

1. Notieren Sie den Dateinamen und die auf der Website angegebene SHA256-Prüfsumme.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie im Terminal `sha256sum /path/to/the/file` aus, um die Prüfsumme selbst zu berechnen. Auf einem Mac müssen Sie das Programm möglicherweise [separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenfolgen. Sie sollten übereinstimmen, sofern die Datei nicht manipuliert wurde.

![Beispiele für SHA256-Prüfsummen beim Download der Software „Blender“. Sie bestehen aus 64 hexadezimalen Ziffern, gefolgt von einem Dateinamen wie „blender.zip“.](blender-sha256-example.png)

Dafür eignet sich die Methode [`digest()`](/de/docs/Web/API/SubtleCrypto/digest) von SubtleCrypto. So können Sie die Prüfsumme einer Datei erzeugen:

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

Anschließend verarbeiten wir die Dateien mit der SubtleCrypto-Schnittstelle. Dazu gehen wir wie folgt vor:

- Wir lesen die Dateien mit der Methode [`arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) des [`File`](/de/docs/Web/API/File)-Objekts in einen {{jsxref("ArrayBuffer")}} ein.
- Wir verarbeiten den ArrayBuffer mit `crypto.subtle.digest('SHA-256', arrayBuffer)`.
- Wir wandeln den resultierenden Hash, ebenfalls ein ArrayBuffer, in eine Zeichenfolge um, damit er angezeigt werden kann.

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

### Wo lässt sich das einsetzen?

Vielleicht denken Sie nun: „_Ich kann das auf meiner eigenen Website einsetzen und beim Herunterladen einer Datei prüfen, ob die Hashes übereinstimmen. So kann ich Nutzern bestätigen, dass ihr Download sicher ist._“ Leider gibt es dabei zwei naheliegende Probleme:

- Ausführbare Dateien sollten **immer** über HTTPS heruntergeladen werden. Das verhindert solche Angriffe durch Dritte während der Übertragung, sodass die zusätzliche Prüfung überflüssig wäre.
- Wenn ein Angreifer die herunterladbare Datei auf dem ursprünglichen Server austauschen kann, kann er auch den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft. So kann er die Prüfung umgehen und einfach behaupten, alles sei in Ordnung. Eine schwer zu entdeckende Möglichkeit wäre beispielsweise, in Ihrem Code den Operator für [strikte Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using) auszutauschen:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Sinnvoll könnte die Prüfung sein, wenn Sie eine Datei aus einer Downloadquelle eines Drittanbieters überprüfen möchten, die Sie nicht kontrollieren. Dafür muss der Downloadserver allerdings {{Glossary("CORS", "CORS")}}-Header bereitstellen, damit Sie die Datei prüfen können, bevor Sie sie Ihren Nutzern zur Verfügung stellen. Leider ist CORS auf vielen Servern standardmäßig nicht aktiviert.

## Was bedeutet „Salting the Hash“?

Vielleicht haben Sie schon einmal den Ausdruck _„Salting the Hash“_ gehört. Er ist für die bisherigen Beispiele nicht unmittelbar relevant, aber dennoch wissenswert.

> [!NOTE]
> In diesem Abschnitt geht es um Passwortsicherheit. Die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Dafür benötigen Sie rechenaufwendige, langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist auf Geschwindigkeit und Effizienz ausgelegt und eignet sich deshalb nicht zum Hashen von Passwörtern. Dieser Abschnitt dient nur zur Information – verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Ein verbreiteter Anwendungsfall für Hashing sind Passwörter. Sie sollten das Passwort eines Nutzers niemals im Klartext speichern. Stattdessen speichern Sie einen Hash des Passworts. Wenn ein Angreifer Zugriff auf Ihre Datenbank mit Nutzernamen und Passwörtern erhält, kann er daraus das ursprüngliche Passwort nicht direkt wiederherstellen. Allerdings lassen sich die Hashes bekannter Passwörter berechnen und mit den erbeuteten Hashes vergleichen. Hängt man an jedes Passwort eine zusätzliche Zeichenfolge an, ändert sich der Hash, sodass dieser Vergleich nicht mehr unmittelbar funktioniert. Das wird als **Salting** bezeichnet. Wird allerdings für jedes Passwort derselbe Salt verwendet, ergeben gleiche Passwörter weiterhin gleiche Hashes. Kennt man eines dieser Passwörter, kennt man somit auch alle anderen mit demselben Hash.

Um dieses Problem zu lösen, verwenden Sie für jedes Passwort einen eigenen Salt, also eine zufällige Zeichenfolge, und hängen ihn an das Passwort an. Anschließend speichern Sie sowohl den Hash als auch den Salt in der Datenbank, damit Sie das Passwort bei einer späteren Anmeldung überprüfen können. Dadurch haben zwei Nutzer mit demselben Passwort unterschiedliche Hashes. Hier zeigt sich auch, warum eine rechenaufwendige kryptografische Funktion nötig ist: Sie macht es zu zeitaufwendig, Listen gebräuchlicher Passwörter durchzuprobieren, um die ursprünglichen Passwörter herauszufinden.

## Hash-Tabellen mit SHA

Mit SHA1 können Sie schnell Hashes erzeugen, die keine kryptografische Sicherheit bieten. Sie sind sehr nützlich, um beliebige Daten in einen Schlüssel umzuwandeln, über den Sie sie später wiederfinden können.

Angenommen, eine Ihrer Datenbanktabellen enthält in einer Spalte große Datenblöcke. Das verringert die Effizienz der Datenbank, weil die Spalte entweder eine variable Länge haben oder groß genug für den größtmöglichen Datenblock sein muss. Alternativ können Sie einen Hash des Datenblocks erzeugen und den Block in einer separaten Nachschlagetabelle speichern, wobei der Hash als Index dient. In der ursprünglichen Tabelle speichern Sie dann nur noch den Hash, der eine feste Länge hat.

Die Zahl möglicher SHA1-Hashes ist enorm. Dass zwei Datenblöcke zufällig denselben SHA1-Hash ergeben, ist daher nahezu ausgeschlossen. Es _ist_ jedoch möglich, gezielt zwei Dateien mit demselben SHA1-Hash zu erzeugen, da SHA1 kryptografisch nicht sicher ist. Ein böswilliger Nutzer könnte theoretisch einen Datenblock erzeugen, der den ursprünglichen Block in der Datenbank ersetzt. Weil der Hash gleich bleibt, könnte dies unbemerkt bleiben. Dieses mögliche Angriffsszenario sollten Sie berücksichtigen.

## Wie Git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein gutes Beispiel, denn es nutzt Hashes auf zwei interessante Arten. Wenn Dateien in Git gespeichert werden, werden sie über ihren SHA1-Hash referenziert. So kann Git die Daten schnell finden und Dateien wiederherstellen.

Für den Hash verwendet Git jedoch nicht nur den Dateiinhalt. Git stellt ihm die UTF8-Zeichenfolge `"blob "` voran, gefolgt von der Dateigröße in Bytes als Dezimalzahl und einem Nullzeichen, das in JavaScript als `"\0"` geschrieben werden kann. Zum Kodieren des UTF8-Texts können Sie die [TextEncoder-Schnittstelle](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, da Zeichenfolgen in JavaScript UTF16-kodiert sind.

Mit dem folgenden Code können Sie, ähnlich wie in unserem SHA256-Beispiel, solche Hashes aus Dateien erzeugen. Der HTML-Code zum Hochladen der Dateien bleibt gleich. Wir ergänzen jedoch die Größenangabe auf dieselbe Weise wie Git.

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

{{EmbedLiveSample("how_git_stores_files")}}

Beachten Sie, wie die [Encoding API](/de/docs/Web/API/Encoding_API) verwendet wird, um den Header zu erzeugen. Dieser wird mit dem ursprünglichen ArrayBuffer verkettet, um die zu hashenden Daten zu erhalten.

## Wie Git Commit-Hashes erzeugt

Git erzeugt auch Commit-Hashes auf ähnliche Weise, allerdings aus mehreren Informationen. Dazu können der Hash des vorherigen Commits und die Commit-Nachricht gehören. Zusammen ergeben sie einen neuen Hash, mit dem sich der Commit anhand mehrerer Merkmale referenzieren lässt.

Der Terminalbefehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [Wie wird der SHA1-Hash eines Git-Commits gebildet?](https://gist.github.com/masak/2415865)

Im Wesentlichen handelt es sich um folgende UTF8-Zeichenfolge, wobei das Nullzeichen als `\0` geschrieben wird:

```plain
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

Das ist nützlich, weil keines der einzelnen Felder garantiert eindeutig ist, ihre Kombination aber einen eindeutigen Verweis auf einen bestimmten Commit ergibt. Die gesamte Zeichenfolge ist jedoch zu lang und unhandlich. Durch das Hashen erhalten Sie aus mehreren Feldern eine neue, eindeutige Zeichenfolge, die kurz genug ist, um sie bequem weiterzugeben.

Deshalb ändert sich der Hash auch, wenn Sie einen Commit nachträglich ändern, selbst wenn die Commit-Nachricht unverändert bleibt. Der Zeitstempel des Commits hat sich geändert – und schon eine Änderung um ein einziges Zeichen reicht aus, um einen völlig anderen Hash zu erzeugen.

Die Erkenntnis daraus: Wenn Sie Daten einen Schlüssel zuweisen möchten, aber keine einzelne Information eindeutig genug ist, können Sie mehrere Zeichenfolgen verketten und hashen, um einen brauchbaren Schlüssel zu erzeugen.

Diese Beispiele haben Ihnen hoffentlich Anregungen gegeben, sich diese leistungsfähige API näher anzusehen. Denken Sie daran, kryptografische Verfahren nicht selbst nachzubauen. Es genügt zu wissen, dass diese Werkzeuge verfügbar sind und einige davon, wie die Funktion [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest), auch für alltägliche Entwicklungsaufgaben nützlich sind.
