---
title: Subresource Integrity
slug: Web/Security/Defenses/Subresource_Integrity
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

**Subresource Integrity** (SRI) ist ein Sicherheitsmerkmal, das es Browsern ermöglicht zu überprüfen, ob die Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulationen bereitgestellt werden. Es funktioniert, indem es Ihnen erlaubt, einen kryptografischen Hash bereitzustellen, den die abgerufene Ressource erfüllen muss.

> [!NOTE]
> Bei der Subresource-Integritätsprüfung einer Ressource, die von einem anderen Ursprung als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, überprüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, erlaubt, dass sie mit dem anfordernden Ursprung geteilt wird.

## Wie Subresource Integrity hilft

Websites entscheiden sich manchmal, auf eine Drittpartei wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu vertrauen, um einige ihrer Ressourcen zu hosten, anstatt alle ihre Ressourcen selbst zu hosten. Zum Beispiel könnte ein Dokument, das von `https://example.com` bereitgestellt wird, eine Ressource von einem anderen Ort einbinden:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt ein Risiko, denn wenn ein Angreifer die Kontrolle über den Drittanbieter-Host erlangt, kann der Angreifer beliebigen schädlichen Inhalt in seine Dateien injizieren (oder die Dateien komplett ersetzen) und somit möglicherweise auch Seiten angreifen, die Dateien von dort abrufen.

Subresource Integrity ermöglicht es, einige Risiken solcher Angriffe zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien injiziert hat, bereitgestellt wurden — und ohne jegliche andere Änderungen, die an diesen Dateien vorgenommen wurden.

## Verwendung von Subresource Integrity

Sie nutzen das Subresource Integrity-Feature, indem Sie einen base64-codierten kryptografischen Hash einer Ressource (Datei) angeben, den Sie dem Browser zum Abrufen auftragen, im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das auf einen bestimmten Hash-Algorithmus hinweist (derzeit erlaubte Präfixe sind `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich und endend mit dem tatsächlichen base64-codierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel für eine `integrity`-Zeichenkette mit base64-codiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Der Teil `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` ist der „Hash“-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der „Hash“-Teil eines `integrity`-Wertes ist streng genommen ein **_kryptografischer_ _Digest_**, der durch Anwenden einer bestimmten Hash-Funktion auf eine Eingabe (zum Beispiel eine Skript- oder Stylesheet-Datei) gebildet wird. Es ist jedoch üblich, die Abkürzung „Hash“ zu verwenden, um _kryptografischer_ _Digest_ zu bedeuten, weshalb das in diesem Artikel verwendet wird.

### Tools zur Erzeugung von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Tool, mit dem Sie SRI-Hashes erzeugen können.

#### Verwendung von OpenSSL

Sie können SRI-Hashes über die Kommandozeile mit **OpenSSL** mit einem Befehl wie folgt erzeugen:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Tool zur Erzeugung von SRI-Hashes mit dem folgenden Code erstellen:

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

1. Speichern Sie diesen Code in einer Datei namens `sri-hash.bat` im Windows SendTo-Ordner Ihrer Umgebung (zum Beispiel, `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an…**, und wählen Sie dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfeld.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfeld zu schließen.

> [!NOTE]
> Wenn OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projekt-Website](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine binären Distributionen von OpenSSL, sondern pflegt eine informelle Liste von Drittanbieter-Distributionen: https://github.com/openssl/openssl/wiki/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) mit einem Befehl wie folgt erzeugen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der `xxd`-Durchlauf konvertiert die hexadezimale Ausgabe von `shasum` in Binärformat.
- Der `awk`-Durchlauf ist notwendig, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` übergibt. Das kann katastrophale Folgen haben, wenn der Dateiname zufällig gültige Hex-Zeichen enthält — weil `xxd` das ebenfalls dekodiert und an `base64` übergibt.

### Cross-Origin Resource Sharing und Subresource Integrity

Zur Subresource-Integritätsprüfung einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, prüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, ihre Freigabe an den anfordernden Ursprung erlaubt. Die Ressource muss daher mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header versehen werden, der die Freigabe der Ressource an den anfordernden Ursprung erlaubt; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Wie Browser Subresource Integrity handhaben

Browser handhaben SRI, indem sie Folgendes tun:

1. Wenn ein Browser ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut entdeckt, muss der Browser vor der Ausführung des Skriptes oder vor der Anwendung eines durch das {{HTMLElement("link")}}-Element spezifizierten Stylesheets zuerst das Skript oder Stylesheet mit dem erwarteten Hash im `integrity`-Wert vergleichen.

   Zur Subresource-Integritätsprüfung einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, prüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, ihre Freigabe an den anfordernden Ursprung erlaubt.

2. Wenn das Skript oder Stylesheet nicht mit seinem zugeordneten `integrity`-Wert übereinstimmt, muss der Browser die Ausführung des Skripts ablehnen oder die Anwendung des Stylesheets verweigern und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Integritätsrichtlinie

Die {{httpheader("Integrity-Policy")}}- und {{httpheader("Integrity-Policy-Report-Only")}}-HTTP-Header ermöglichen es einem Dokument, eine Richtlinie bezüglich der Integritätsmetadatenanforderungen für geladene Skript- und Stylesheet-Subressourcen durchzusetzen.

Wenn ein `Integrity-Policy`-Header angegeben wird, blockiert der Browser Anfragen mit [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus oder ohne `integrity`-Attribut und meldet Verstöße, wenn ein gültiger Berichtsendpunkt angegeben ist.
Wenn ein `Integrity-Policy-Report-Only`-Header angegeben wird, erlaubt der Browser Anfragen, die gegen die Richtlinie verstoßen, meldet jedoch Verstöße an den Berichtsendpunkt (falls ein gültiger Berichtsendpunkt angegeben ist).

Entwickler würden typischerweise `Integrity-Policy-Report-Only` als ersten Bereitstellungsschritt in ihrer Integritätsrichtlinienreise verwenden, um sicherzustellen, dass alle Skripte und Stylesheets, die in ihren Dokumenten geladen werden, die entsprechenden Integritätsmetadaten haben. Sobald sie sehen, dass keine Verstöße gemeldet werden, wissen sie, dass sie das Blockieren mit dem `Integrity-Policy`-Header aktivieren können, ohne das Risiko einzugehen, Benutzerproblemen zu begegnen.

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Definiert eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), die blockiert werden sollen. Die einzigen erlaubten Werte sind `script` und `style`.
- `sources` {{optional_inline}}
  - : Definiert eine Liste von Integritätsquellen. Der Standard und einzige derzeit unterstützte Wert ist `inline`. Daher hat das Hinzufügen von `sources=(inline)` zum Header eine ähnliche Wirkung wie das Weglassen von `sources`.
- `endpoints` {{optional_inline}}
  - : Definiert eine Liste von [Berichtsendpunkten](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). Die Berichtsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert werden.

In Fällen, in denen eine Anfrage durch eine Integritätsrichtlinie blockiert wird, wird ein [Reporting API](/de/docs/Web/API/Reporting_API)-Verstoßbericht mit einem Typ von `integrity-violation` und einem Body vom Typ [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) erstellt, der Informationen wie die URL des Dokuments und die blockierte Ressource enthält.

Ein typischer Bericht könnte folgendermaßen aussehen

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

## Beispiele

In den folgenden Beispielen wird angenommen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als erwarteter SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und es eine Kopie des Skripts unter `https://example.com/example-framework.js` gehostet wird.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er vor der Ausführung des Skripts `https://example.com/example-framework.js` das Skript zuerst mit dem erwarteten Hash vergleichen und überprüfen muss, dass es eine Übereinstimmung gibt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS settings attributes](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

### Durchsetzung von Integrität mit dem `Integrity-Policy`-Header

Sie können den {{httpheader("Integrity-Policy")}}-Header zu Ihrem Dokument hinzufügen, um sicherzustellen, dass die externen Ressourcen, die es lädt (in diesem Fall Skripte), mit Integrität geladen werden (und nicht im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus geladen werden)

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

Wenn Sie nicht sicher sind, dass alle externen Skripte Integritätsmetadaten enthalten, können Sie die nur für Berichte verfügbare Version der Funktion aktivieren und mit der Erfassung von Verstoßmeldungen beginnen.
Sie können dies mit dem {{httpheader("Integrity-Policy-Report-Only")}}-Header tun.

```http
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("Content-Security-Policy")}}-HTTP-Header.
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
