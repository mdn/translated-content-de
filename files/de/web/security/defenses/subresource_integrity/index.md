---
title: Subresource Integrity
slug: Web/Security/Defenses/Subresource_Integrity
l10n:
  sourceCommit: fef6630e9b90f9794d3194ea8389ff70599c6884
---

**Subresource Integrity** (SRI) ist ein Sicherheitsmerkmal, das es Browsern ermöglicht sicherzustellen, dass die von ihnen abgerufenen Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Manipulation bereitgestellt werden. Es funktioniert, indem Sie einen {{Glossary("hash_function", "kryptografischen Hash")}} angeben können, den eine abgerufene Ressource erfüllen muss.

## Wie Subresource Integrity hilft

Websites entscheiden sich manchmal dafür, einen Drittanbieter wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu nutzen, um einige ihrer Ressourcen zu hosten, anstatt alle Ressourcen selbst zu hosten. Zum Beispiel könnte ein Dokument, das von `https://example.com` bereitgestellt wird, eine Ressource von einem anderen Standort einbinden:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt ein Risiko, denn wenn ein Angreifer die Kontrolle über den Drittanbieter-Host erlangt, kann er beliebigen schädlichen Code in seine Dateien einfügen (oder die Dateien komplett ersetzen). Dies wird als [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks) bezeichnet.

Subresource Integrity bietet Schutz gegen solche Angriffe, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung abruft, genau die Inhalte haben, die Sie erwarten.

## Verwendung von Subresource Integrity

Sie können Subresource Integrity verwenden mit:

- {{HTMLElement("script")}}-Elementen.
- {{HTMLElement("link")}}-Elementen, deren [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attributwert [`stylesheet`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`modulepreload`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) ist.

### Festlegen des `integrity`-Attributs

Um die Funktion zu verwenden, fügen Sie dem Element das [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity)-Attribut hinzu. Der Wert von `integrity` ist eine durch Leerzeichen getrennte Liste von {{Glossary("hash_function", "kryptografischen Hashes")}} des Inhalts der verlinkten Ressource, wobei jeder Hash mit einem Identifikator für den verwendeten Hash-Algorithmus beginnt, gefolgt von einem Bindestrich und dem eigentlichen base64-kodierten Hash-Wert.

Derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`.

Zum Beispiel fügt das folgende Markup ein `integrity`-Attribut zu einem `<script>`-Element hinzu. Das Attribut enthält zwei SHA-384-Hashes und zwei SHA-512-Hashes:

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-DEzZmZhMGFkMGQ0OTQ3MzZkNGY0OTg4NGIwN2ZiMMTM3YmQ
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

### Wie Browser Subresource Integrity handhaben

Wenn ein Browser ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut begegnet, muss der Browser, bevor er das Skript ausführt oder ein vom {{HTMLElement("link")}}-Element angegebenes Stylesheet anwendet, das Skript oder das Stylesheet mit den erwarteten Hashes, die im `integrity`-Wert angegeben sind, vergleichen.

Die verschiedenen Hash-Funktionen haben unterschiedliche Stärken: von schwächer zu stärker lautet die Reihenfolge SHA-256, SHA-384, SHA-512. Wenn der Browser eine Ressource mit gesetztem `integrity`-Attribut herunterlädt, wählt er zunächst die Menge der Hashes, die mit der stärksten vorhandenen Hash-Funktion generiert wurden. Das heißt, wenn das Attribut Werte enthält, die mit SHA-256 und SHA-384 generiert wurden, werden nur die Hashes verwendet, die mit SHA-384 generiert wurden. Alle anderen Hashes werden ignoriert.

Der Browser berechnet dann den Hash der Ressourcendaten mit der angegebenen Funktion und vergleicht das Ergebnis mit allen angegebenen Werten: Wenn der tatsächliche Wert mit einem der angegebenen Werte übereinstimmt, lädt der Browser die Ressource, andernfalls lehnt er das Laden der Ressource ab und gibt einen Netzwerkfehler zurück.

Das bedeutet, dass Entwickler:

- **Mehrere Werte mit unterschiedlichen Hash-Funktionen bereitstellen**, und der Browser wird nur die stärkste bereitgestellte Funktion verwenden.
- **Mehrere Werte mit derselben Hash-Funktion bereitstellen**, und der Browser wird das Attribut validieren, wenn einer von ihnen übereinstimmt: Dies ermöglicht es einem Entwickler, alternative Versionen einer Ressource bereitzustellen, während ihre Integrität überprüft wird.

## Subresource Integrity und CORS

Cross-Origin-Anfragen, die Subresource Integrity nutzen, müssen das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Protokoll verwenden. Das bedeutet, dass der Server, der die Ressource bereitstellt, explizit dem Browser mitteilen muss, dass der anfragende Ursprung berechtigt ist, die Ressource zu verwenden. Dies erfolgt durch das Senden des entsprechenden {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Headers.

Ein CDN wird oft den Platzhalterwert dafür verwenden:

```http
Access-Control-Allow-Origin: *
```

### `no-cors`-Modus und das `crossorigin`-Attribut

Als Konsequenz aus der Anforderung, CORS bei der Anfrage einer Ressource mit Integrität zu verwenden, müssen Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut in Ihr Markup einfügen:

```html
<script
  src="https://cdn.example.com"
  integrity="sha512-abcde"
  crossorigin="anonymous"></script>
```

Dies ist erforderlich, weil eine Ressource, die aus der HTML eines Dokuments geladen wird, standardmäßig im `no-cors`-Modus geladen wird:

```html
<script src="https://cdn.example.com"></script>
<!-- loaded in no-cors mode -->
```

Im `no-cors`-Modus wird eine Cross-Origin-Anfrage auch dann erfolgreich sein, wenn der Eigentümer der Ressource nicht die entsprechenden CORS-Header sendet, aber der Inhalt der Antwort wird nicht an den Anfrager weitergegeben. Ein Dokument kann also eine Ressource _nutzen_, die es mit `no-cors` angefordert hat, aber es kann sie nicht _lesen_.

Jedoch könnte Subresource Integrity einem Angreifer Informationen über den Inhalt einer Subresource geben, auch wenn diese im `no-cors`-Modus angefordert wird. Dazu erstellt der Angreifer eine Seite, die:

- Die Ressource anfordert und einen bestimmten Hash-Wert als `integrity`-Wert bereitstellt.
- Den Erfolg oder Misserfolg des Ressourceladens überwacht (zum Beispiel durch [das Abhören von `error`-Ereignissen](/de/docs/Web/Security/Attacks/XS-Leaks#leaking_page_existence_using_error_events)).

Der Angreifer bringt dann das Ziel dazu, die Seite zu laden: Wenn die Ressource erfolgreich geladen wird, dann weiß der Angreifer, dass die Ressource Inhalte hat, die mit dem Hash übereinstimmen.

Um diesen Angriff zu verhindern, erlauben es Browser nicht, dass `no-cors`-Anfragen Subresource Integrity verwenden, sodass eine Anfrage wie diese immer fehlschlagen wird:

```html example-bad
<script src="https://cdn.example.com" integrity="sha512-abcde"></script>
```

## Integritätsrichtlinie

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} ermöglichen es einem Dokument, eine Richtlinie bezüglich der Integritätsmetadatenanforderungen für geladene Skript- und Stylesheet-Subressourcen durchzusetzen. Mit anderen Worten, die Richtlinie erlaubt es einer Website, zu _fordern_, dass das `integrity`-Attribut für geladene Ressourcen angegeben wird.

Wenn ein `Integrity-Policy`-Header angegeben ist, blockiert der Browser Anfragen mit [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus oder ohne ein `integrity`-Attribut und berichtet auch über Verstöße, wenn ein gültiger Berichts-Endpunkt angegeben ist. Wenn ein `Integrity-Policy-Report-Only`-Header angegeben ist, erlaubt der Browser Anfragen, die die Richtlinie verletzen, berichtet aber über Verstöße an den Berichts-Endpunkt (falls ein gültiger Berichts-Endpunkt angegeben ist).

Entwickler würden typischerweise `Integrity-Policy-Report-Only` als ersten Bereitstellungsschritt in ihrer Integritätsrichtlinienreise verwenden, um sicherzustellen, dass alle Skripte und Stylesheets, die in ihren Dokumenten geladen werden, die entsprechenden Integritätsmetadaten haben. Sobald sie keine Verletzungsberichte mehr erhalten, wissen sie, dass sie das Blockieren mithilfe des `Integrity-Policy`-Headers aktivieren können, ohne ein Risiko für Benutzerstörungen einzugehen.

Die Header-Werte sind als strukturierte Felddictionaries mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Definiert eine Liste von [Zielorten für Anfragen](/de/docs/Web/API/Request/destination), die blockiert werden sollen. Die einzigen erlaubten Werte sind `script` und `style`.
- `sources` {{optional_inline}}
  - : Definiert eine Liste von Integritätsquellen. Der Standard und derzeit einzige unterstützte Wert ist `inline`. Das Hinzufügen von `sources=(inline)` zum Header hat daher eine ähnliche Wirkung wie das Weglassen von `sources`.
- `endpoints` {{optional_inline}}
  - : Definiert eine Liste von [Berichts-Endpunkten](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). Die Berichts-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert sein.

In Fällen, in denen eine Anfrage durch eine Integritätsrichtlinie blockiert wird, wird ein [Reporting-API](/de/docs/Web/API/Reporting_API)-Verletzungsbericht erstellt, mit einem Typfeld von `integrity-violation` und der Struktur, die durch [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport) definiert ist, das Informationen wie die URL des Dokuments und die blockierte Ressource enthält.

Ein typischer Bericht könnte so aussehen

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/main.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

## Werkzeuge zur Generierung von SRI-Hashes

### SRI Hash Generator

Der [SRI Hash Generator](https://srihash.org/) ist ein Online-Werkzeug, das Sie zur Generierung von SRI-Hashes verwenden können.

### Nutzung von OpenSSL

Sie können SRI-Hashes von der Befehlszeile aus mit **OpenSSL** durch einen Befehlsaufruf wie diesen generieren:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Werkzeug zur Generierung von SRI-Hashes mit dem folgenden Code erstellen:

```batch
@echo off
set bits=384
openssl dgst -sha%bits% -binary %1% | openssl base64 -A > tmp
set /p a= < tmp
del tmp
echo sha%bits%-%a%
pause
```

Um diesen Code zu verwenden:

1. Speichern Sie diesen Code in einer Datei mit dem Namen `sri-hash.bat` im Windows-SendTo-Ordner in Ihrer Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an…**, und wählen Sie dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfenster.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Wenn OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projekt-Website](https://www.openssl.org/) für Informationen über das Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine Binärdistributionspakete von OpenSSL, führt aber eine informelle Liste von Drittanbieter-Distributionen: https://github.com/openssl/openssl/wiki/Binaries.

### Nutzung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) durch einen Befehlsaufruf wie diesen generieren:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der Einspeisungsschritt `xxd` nimmt die hexadezimale Ausgabe von `shasum` und wandelt diese in Binärform um.
- Der Einspeisungsschritt `awk` ist erforderlich, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` weitergeben wird. Dies kann katastrophale Konsequenzen haben, wenn der Dateiname zufällig gültige Hexzeichen enthält — da `xxd` dies auch dekodieren und an `base64` weitergeben wird.

## Beispiele

### Subresource Integrity mit dem `<script>`-Element

Dieses Beispiel fügt einem {{htmlelement("script")}}-Element ein `integrity`-Attribut hinzu. Das Attribut enthält vier Hashes: zwei, die mit SHA-384 berechnet wurden, und die anderen beiden mit SHA-512. Der Browser wird:

- die beiden SHA-512-Hashes auswählen
- die Dateiinhalte mit SHA-512 hashen

Wenn das Ergebnis mit einem der beiden aufgelisteten SHA-512-Hashes übereinstimmt, dann lädt und führt der Browser das Skript aus: andernfalls gibt er einen Netzwerkfehler zurück.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-DEzZmZhMGFkMGQ0OTQ3MzZkNGY0OTg4NGIwN2ZiMMTM3YmQ
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

### Durchsetzung von Integrität mit dem `Integrity-Policy`-Header

Sie können den {{httpheader("Integrity-Policy")}}-Header zu Ihrem Dokument hinzufügen, um sicherzustellen, dass die externen Ressourcen, die es lädt (in diesem Fall Skripte), mit Integrität geladen werden (und nicht im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus geladen werden)

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

Wenn Sie nicht sicher sind, ob alle externen Skripte Integritätsmetadaten haben, können Sie die nur Bericht-erstellende Version der Funktion aktivieren und Berichte über Verstöße zu erhalten beginnen. Dies können Sie mit dem {{httpheader("Integrity-Policy-Report-Only")}}-Header tun.

```http
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [Ein CDN, das Sie nicht XSS-en kann: Verwendung von Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://srihash.org/)
