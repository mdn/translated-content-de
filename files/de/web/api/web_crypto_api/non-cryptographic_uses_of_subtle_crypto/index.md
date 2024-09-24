---
title: Nicht-kryptografische Anwendungen von SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Crypto API")}}

Dieser Artikel konzentriert sich auf die Anwendungen der [`digest`](/de/docs/Web/API/SubtleCrypto/digest)-Methode der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Viele andere Methoden innerhalb der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) haben sehr spezifische kryptografische Anwendungsfälle. Das Erstellen von Hashes von Inhalten (was die digest-Methode tut) hat jedoch viele nützliche Zwecke.

Dieser Artikel behandelt nicht die kryptografischen Anwendungen der [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto). Ein wichtiger Punkt aus diesem Artikel ist: Verwenden Sie **diese API nicht** für kryptografische Zwecke in der Produktion, da sie mächtig und niedrigstufig ist. Um sie korrekt zu verwenden, müssen Sie viele kontextspezifische Schritte unternehmen, um kryptografische Aufgaben korrekt auszuführen. Wenn einer dieser Schritte falsch ausgeführt wird, wird Ihr Code bestenfalls nicht ausgeführt; im schlimmsten Fall wird er ausgeführt und Sie setzen Ihre Benutzer unwissentlich einem Risiko mit einem unsicheren Produkt aus.

Es könnte sein, dass Sie die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) gar nicht verwenden müssen. Viele der Dinge, für die Sie Kryptographie verwenden möchten, sind bereits gelöst und Teil der Web-Plattform. Zum Beispiel, wenn Sie sich über Man-in-the-Middle-Angriffe Sorgen machen, wie dass Wi-Fi-Hotspots Informationen zwischen dem Client und dem Server lesen, wird dies durch die korrekte Verwendung von [HTTPS](/de/docs/Glossary/HTTPS) gelöst. Möchten Sie Informationen sicher zwischen Benutzern senden? Dann können Sie eine Datenverbindung zwischen Benutzern mit [WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels) einrichten, die als Teil des Standards verschlüsselt sind.

Die [SubtleCrypto-Schnittstelle](/de/docs/Web/API/SubtleCrypto) bietet niedrige Primitiven für die Arbeit mit Kryptographie, aber die Implementierung eines Systems mit diesen Tools ist eine komplizierte Aufgabe. Fehler sind schwer zu bemerken und die Ergebnisse können bedeuten, dass die Daten Ihrer Benutzer nicht so sicher sind, wie Sie denken. Dies könnte katastrophale Folgen haben, wenn Ihre Benutzer sensible oder wertvolle Daten teilen.

Wenn Sie unsicher sind, versuchen Sie es nicht selbst, sondern beauftragen Sie jemanden mit Erfahrung und stellen Sie sicher, dass Ihre Software von einem Sicherheitsexperten geprüft wird.

## Einen Datei-Hash erzeugen

Dies ist das einfachste nützliche, das Sie mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) tun können. Es erfordert nicht das Erzeugen von Schlüsseln oder Zertifikaten und besteht aus einem einzigen Schritt.

[Hashing](/de/docs/Glossary/Hash) ist eine Technik, bei der Sie eine große Zeichenfolge von Bytes in eine kleinere Zeichenfolge umwandeln, wobei kleine Änderungen in der langen Zeichenfolge zu großen Änderungen in der kleineren Zeichenfolge führen. Diese Technik ist nützlich, um zwei identische Dateien zu identifizieren, ohne jedes Byte beider Dateien zu überprüfen. Dies ist sehr nützlich, da Sie eine einfache Zeichenfolge zum Vergleichen haben. Um klarzustellen: Hashing ist eine **einseitige** Operation. Sie können die ursprüngliche Byte-Sequenz nicht aus dem Hash generieren.

Wenn zwei generierte Hashes identisch sind, die Dateien, die verwendet wurden, um sie zu generieren, jedoch unterschiedlich sind, wird dies als _Hash-Kollision_ bezeichnet, was unwahrscheinlich ist und bei einer sicheren Hash-Funktion wie SHA256 fast unmöglich herzustellen ist. Wenn also die beiden Zeichenfolgen identisch sind, können Sie ziemlich sicher sein, dass die beiden ursprünglichen Dateien identisch sind.

Zum Zeitpunkt der Veröffentlichung ist SHA256 die übliche Wahl für das Hashing von Dateien, aber es sind [höhere Ordnungs-Hash-Funktionen](/de/docs/Web/API/SubtleCrypto#supported_algorithms) in der SubtleCrypto-Schnittstelle verfügbar. Die gängigste Darstellung eines SHA256-Hashes ist eine Zeichenfolge von 64 hexadezimalen Ziffern. Hexadezimal bedeutet, dass es nur die Zeichen 0-9 und a-f verwendet, die 4 Bits an Informationen darstellen. Zusammenfassend wandelt ein SHA256-Hash jede Datenlänge in fast einzigartige 256 Bits Daten um.

Diese Technik wird häufig von Websites verwendet, die ausführbare Dateien zum Download anbieten, um sicherzustellen, dass die heruntergeladene Datei mit der übereinstimmt, die der Autor vorgesehen hat. Dies gewährleistet, dass Ihre Benutzer keine Malware installieren. Der gängigste Weg, dies zu tun, ist:

1. Notieren Sie den Dateinamen und die von der Website bereitgestellte SHA256-Prüfsumme.
2. Laden Sie die ausführbare Datei herunter.
3. Führen Sie `sha256sum /path/to/the/file` im Terminal aus, um Ihren eigenen Code zu generieren. Wenn Sie einen Mac verwenden, müssen Sie ihn möglicherweise [separat installieren](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. Vergleichen Sie die beiden Zeichenfolgen - sie sollten übereinstimmen, es sei denn, die Datei wurde kompromittiert.

![Beispiele von SHA256 vom Download der Software "Blender". Diese sehen aus wie 64 hexadezimale Ziffern, gefolgt von einem Dateinamen wie "blender.zip"](blender-sha256-example.png)

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Methode von SubtleCrypto ist hierfür nützlich. Um eine Prüfsumme einer Datei zu generieren, können Sie es wie folgt tun:

Zuerst fügen wir einige HTML-Elemente hinzu, um einige Dateien zu laden und die SHA-256 Ausgabe anzuzeigen:

```html
<h3>Demonstration des Hashings einer Datei mit SHA256</h3>

<label
  >Wählen Sie die zu hashenden Datei(en) aus <input type="file" id="file" name="file" multiple
/></label>
<output style="display:block;font-family:monospace;"></output>
```

Als nächstes verwenden wir die SubtleCrypto-Schnittstelle, um sie zu verarbeiten. Dies funktioniert, indem:

- Die Dateien in einen {{jsxref("ArrayBuffer")}} eingelesen werden, indem die Methode {{domxref("Blob.arrayBuffer()", "arrayBuffer()")}} des {{domxref("File")}}-Objekts verwendet wird.
- Verwenden Sie `crypto.subtle.digest('SHA-256', arrayBuffer)`, um den ArrayBuffer zu verdauen.
- Konvertieren Sie den resultierenden Hash (einen weiteren ArrayBuffer) in eine Zeichenfolge, damit er angezeigt werden kann.

```js
const output = document.querySelector("output");
const file = document.getElementById("file");

// Führen Sie die Hashing-Funktion aus, wenn der Benutzer eine oder mehrere Dateien auswählt
file.addEventListener("change", hashTheseFiles);

// Die Digest-Funktion ist asynchron, sie gibt ein Versprechen zurück
// Wir verwenden die Async/Await-Syntax, um den Code zu vereinfachen.
async function fileHash(file) {
  const arrayBuffer = await file.arrayBuffer();

  // Verwenden Sie die Subtle-Crypto-API, um eine SHA256-Summe des Array-Buffers der Datei auszuführen.
  // Der resultierende Hash wird in einem Array-Buffer gespeichert.
  const hashAsArrayBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);

  // Um ihn als Zeichenfolge anzuzeigen, erhalten wir den hexadezimalen Wert
  // jedes Bytes des Array-Buffers. Dies ergibt ein Array, in dem jedes Byte
  // des Array-Buffers ein Element im Array wird.
  const uint8ViewOfHash = new Uint8Array(hashAsArrayBuffer);
  // Wir konvertieren es dann in ein reguläres Array, damit wir jedes Element
  // in hexadezimale Zeichenfolgen konvertieren können, bei denen Zeichen von 0-9 oder a-f eine Zahl
  // zwischen 0 und 15 darstellen, die 4 Bits an Informationen enthält,
  // also sind 2 davon 8 Bits (1 Byte).
  const hashAsString = Array.from(uint8ViewOfHash)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashAsString;
}

async function hashTheseFiles(e) {
  let outHTML = "";
  // Iterieren Sie über jede Datei in der Dateiauswahl
  for (const file of this.files) {
    // Berechnen Sie ihren Hash und listen Sie ihn im Ausgabeelement auf.
    outHTML += `${file.name}    ${await fileHash(file)}\n`;
  }
  output.innerText = outHTML;
}
```

{{EmbedLiveSample("hashing_a_file")}}

### Wo würden Sie dies verwenden?

An diesem Punkt denken Sie vielleicht: "_Ich kann dies auf meiner eigenen Website verwenden, sodass wir sicherstellen können, dass die Hashes übereinstimmen, wenn Benutzer eine Datei herunterladen, um den Benutzer zu beruhigen, dass sein Download sicher ist_". Leider fallen dazu zwei Probleme ein:

- Ausführbare Downloads sollten **immer** über HTTPS erfolgen. Dies verhindert, dass Zwischenparteien Angriffe wie diesen durchführen, sodass es redundant wäre.
- Wenn der Angreifer die Download-Datei auf dem ursprünglichen Server ersetzen kann, kann er auch einfach den Code ersetzen, der die SubtleCrypto-Schnittstelle aufruft, um sie zu umgehen und anzugeben, dass alles in Ordnung ist. Wahrscheinlich etwas Heimtückisches wie das Ersetzen der [strikten Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using), was in Ihrem eigenen Code schwer zu erkennen ist:

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

Ein Ort, an dem es sich lohnen könnte, ist, wenn Sie eine Datei von einer Downloadquelle eines Drittanbieters testen möchten, die Sie nicht kontrollieren. Dies wäre der Fall, solange der Download-Ort [CORS](/de/docs/Glossary/CORS)-Header aktiviert hat, damit Sie die Datei scannen können, bevor Sie sie Ihren Benutzern zur Verfügung stellen. Leider sind bei den meisten Servern CORS standardmäßig nicht aktiviert.

## Was ist "Salting the Hash"?

Ein Ausdruck, den Sie vielleicht zuvor gehört haben, ist _"Salting the Hash"_. Es ist nicht direkt relevant für unsere derzeitigen Themen, aber es ist gut, darüber Bescheid zu wissen.

> [!NOTE]
> In diesem Abschnitt geht es um die Sicherheit von Passwörtern und die von SubtleCrypto bereitgestellten Hash-Funktionen sind für diesen Anwendungsfall nicht geeignet. Für diese Zwecke benötigen Sie teure langsame Hash-Funktionen wie `scrypt` und `bcrypt`. SHA ist so konzipiert, dass es ziemlich schnell und effizient ist, was es ungeeignet für das Hashen von Passwörtern macht. Dieser Abschnitt ist ausschließlich zu Ihrem Interesse gedacht — verwenden Sie die Web Crypto API nicht, um Passwörter auf dem Client zu hashen.

Ein beliebter Anwendungsfall für Hashing sind Passwörter, Sie möchten niemals das Passwort eines Benutzers im Klartext speichern, das ist einfach eine schreckliche Idee. Stattdessen speichern Sie einen Hash des Benutzerpassworts, damit das ursprüngliche Passwort nicht wiederhergestellt werden kann, sollte ein Hacker Ihren Benutzernamen und Passwortdatenbank erlangen. Die aufmerksamen unter Ihnen könnten bemerken, dass Sie die ursprünglichen Passwörter immer noch ermitteln können, indem Sie die Hashes von Listen bekannter Passwörter mit der erlangten Passwort-Hash-Liste vergleichen. Das Anhängen eines Strings an die Passwörter ändert den Hash, sodass er nicht mehr passt. Dies wird als **Salting** bezeichnet. Ein weiteres kniffliges Problem ist, wenn Sie für jedes Passwort das gleiche Salz verwenden, dann sind Passwörter mit übereinstimmenden Hashes auch dasselbe ursprüngliche Passwort. Wenn Sie eines davon kennen, kennen Sie also alle übereinstimmenden Passwörter.

Um dieses Problem zu lösen, führen Sie das sogenannte _Salting the Hash_ durch. Für jedes Passwort generieren Sie ein Salt (ein zufälliger Zeichenfolgenfolge) und hängen es an die Passwortzeichenfolge an. Sie speichern dann den Hash und das Salt in derselben Datenbank, damit Sie beim späteren Anmelden des Benutzers eine Übereinstimmung prüfen können. Das bedeutet, dass wenn zwei Benutzer dasselbe Passwort verwenden, die Hashes unterschiedlich sind. Daher brauchen Sie eine teure kryptografische Funktion, um es zu zeitaufwändig zu machen, Listen von häufig verwendeten Passwörtern zu verwenden, um herauszufinden, was die ursprünglichen Passwörter waren.

## Hash-Tabellen mit SHA

Sie können SHA1 verwenden, um schnell nicht kryptografisch sichere Hashes zu erzeugen. Diese sind unglaublich nützlich, um beliebige Daten in einen Schlüssel umzuwandeln, den Sie später nachschlagen können.

Zum Beispiel, wenn Sie eine Datenbank haben möchten, die einen großen Datenblock als eines der Felder in einer Zeile enthält. Dies verringert die Effizienz Ihrer Datenbank, da eines der Felder entweder variable Länge haben muss oder groß genug sein muss, um den größten möglichen Datenblock zu speichern. Eine alternative Lösung besteht darin, einen Hash des Blocks zu erzeugen und ihn in einer separaten Nachschlagetabelle unter Verwendung des Hashs als Index zu speichern. Sie können dann nur den Hash in Ihrer ursprünglichen Datenbank speichern, was eine schöne feste Länge hat.

Die möglichen Variationen für einen SHA1-Hash sind unglaublich zahlreich. So sehr, dass es nahezu unmöglich ist, zwei Blobs versehentlich mit demselben SHA1-Hash zu erzeugen. Es _ist_ jedoch möglich, absichtlich zwei Dateien mit demselben SHA1-Hash zu erstellen, da SHA1 nicht kryptografisch sicher ist. Ein böswilliger Benutzer könnte theoretisch einen Datenblock erzeugen, der das Original in der Datenbank ersetzt und unbemerkt bleibt, weil der Hash derselbe ist. Dies ist ein Angriffsvektor, den Sie sich bewusst machen sollten.

## Wie Git Dateien speichert

Git verwendet SHA1-Hashes und ist hier ein großartiges Beispiel, da es Hashes auf zwei interessante Weisen verwendet. Wenn Dateien in Git gespeichert werden, werden sie durch ihren SHA1-Hash referenziert. Dies macht es Git leicht, die Daten zu finden und Dateien wiederherzustellen.

Es verwendet jedoch nicht nur die Dateiinhalte für den Hash, es fügt auch das UTF8-String `"blob "` voran, gefolgt von der Dateigröße in Bytes, die im Dezimalsystem geschrieben ist, gefolgt vom Nullzeichen (das in JavaScript als `"\0"` geschrieben werden kann). Sie können das [TextEncoder-Interface](/de/docs/Web/API/TextEncoder) der [Encoding API](/de/docs/Web/API/Encoding_API) verwenden, um den UTF8-Text zu codieren, da Zeichenfolgen in JavaScript UTF16 sind.

Der folgende Code, wie unser SHA256-Beispiel, kann verwendet werden, um diese Hashes aus Dateien zu generieren. Das HTML zum Hochladen von Dateien bleibt dasselbe, aber wir leisten zusätzliche Arbeit, um Größeninformationen in der gleichen Weise wie Git voranzustellen.

```html
<h3>Demonstration, wie Git SHA1 für Dateien verwendet</h3>

<label
  >Wählen Sie die zu hashenden Datei(en) aus <input type="file" id="file" name="file" multiple
/></label>

<output style="display:block;font-family:monospace;"></output>
```

```js
const output = document.querySelector("output");
const file = document.getElementById("file");
file.addEventListener("change", hashTheseFiles);

async function fileHash(file) {
  const arrayBuffer = await file.arrayBuffer();

  // Git fügt dem Null-beendeten Text 'blob 1234' voran, wobei 1234 die Dateigröße
  // darstellt, bevor es gehasht wird. Wir werden dies reproduzieren.

  // zuerst berechnen wir die Bytelänge der Datei
  const uint8View = new Uint8Array(arrayBuffer);
  const length = uint8View.length;

  // Git im Terminal verwendet UTF8 für seine Zeichenfolgen; das Web verwendet UTF16.
  // Wir müssen einen Encoder verwenden, da unterschiedliche binäre Darstellungen
  // der Buchstaben in unserer Nachricht zu unterschiedlichen Hashes führen
  const encoder = new TextEncoder();
  // Null-terminated bedeutet, dass die Zeichenfolge im Nullzeichen endet,
  // das in JavaScript als '\0' geschrieben wird.
  const view = encoder.encode(`blob ${length}\0`);

  // Wir kombinieren dann die 2 Array-Buffers in einen neuen Array-Buffer.
  const newBlob = new Blob([view.buffer, arrayBuffer], {
    type: "text/plain",
  });
  const arrayBufferToHash = await newBlob.arrayBuffer();

  // Schließlich führen wir den Hash diesmal als SHA1 aus, was Git verwendet.
  // Dann geben wir ihn als Zeichenfolge zurück, damit er angezeigt wird.
  return hashToString(await crypto.subtle.digest("SHA-1", arrayBufferToHash));
}

function hashToString(arrayBuffer) {
  const uint8View = new Uint8Array(arrayBuffer);
  return Array.from(uint8View)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// wie zuvor iterieren wir über die Dateien
async function hashTheseFiles(e) {
  let outHTML = "";
  for (const file of this.files) {
    outHTML += `${file.name}    ${await fileHash(file)}\n`;
  }
  output.innerText = outHTML;
}
```

{{EmbedLiveSample("how-git-stores-files")}}

Beachten Sie, wie das [Encoding API](/de/docs/Web/API/Encoding_API) verwendet wird, um die Kopfzeile zu erzeugen, die mit dem ursprünglichen ArrayBuffer verkettet wird, um die Zeichenfolge zu erzeugen, die gehasht werden soll.

## Wie Git Commit-Hashes generiert

Interessanterweise generiert Git auch Commit-Hashes auf ähnliche Weise basierend auf mehreren Informationen. Dazu können der vorhergehende Commit-Hash und die Commit-Nachricht gehören, die zusammen einen neuen Hash bilden. Dies kann verwendet werden, um Commits zu referenzieren, die auf mehreren einzigartigen Kennungen basieren.

Der Terminalbefehl lautet: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

Quelle: [Wie wird der Git-Commit-SHA1 gebildet](https://gist.github.com/masak/2415865)

Im Wesentlichen ist es der UTF8-String (Nullzeichen als `\0` geschrieben):

```plain
commit [Größe in Bytes als Dezimalstelle dieser Info]\0tree [Baum-Hash]
parent [übergeordneter Commit-Hash]
author [Autoreninfo] [Zeitstempel]
committer [Committer-Info] [Zeitstempel]

Commit-Nachricht
```

Das ist großartig, weil keines der einzelnen Felder garantiert einzigartig ist, aber wenn sie zusammengefügt werden, geben sie einen einzigartigen Zeiger auf einen einzigen Commit. Allerdings ist die gesamte Zeichenfolge zu lang und unhandlich, um sie zu verwenden. Durch das Hashen erhalten Sie jedoch eine neue einzigartige Zeichenfolge, die kurz genug ist, um bequem aus mehreren Feldern geteilt zu werden.

Das ist der Grund, warum sich der Hash ändert, wenn Sie jemals Ihren Commit geändert haben, auch wenn Sie keine Änderungen an der Nachricht vornehmen. Der Zeitstempel des Commits hat sich geändert, was auch nur durch ein einziges Zeichen ausreicht, um den neuen Hash vollständig zu ändern.

Die Lektion daraus ist, dass, wenn Sie einen Schlüssel zu einigen Daten hinzufügen möchten, aber keine einzige Information einzigartig genug ist, das Verketten mehrerer Zeichenfolgen und deren Hashing eine großartige Möglichkeit ist, einen nützlichen Schlüssel zu generieren.

Hoffentlich haben Sie diese Beispiele dazu ermutigt, einen Blick auf diese neue mächtige API zu werfen. Denken Sie daran, versuchen Sie nicht, kryptografische Dinge selbst zu erstellen. Es reicht zu wissen, dass die Werkzeuge da sind und dass einige von ihnen wie die [`crypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion nützliche Werkzeuge für Ihre tägliche Entwicklung sind.
