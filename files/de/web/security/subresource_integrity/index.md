---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: 43e2a741865dd45ad5f18bb532fe84c6aaec0e77
---

**Subresource Integrity** (SRI) ist ein Sicherheitsmerkmal, das es Browsern ermöglicht, zu überprüfen, ob Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulationen geliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, den eine abgerufene Ressource erfüllen muss.

> [!NOTE]
> Für die Überprüfung der Subresource Integrity einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, überprüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, das Teilen mit dem anfordernden Ursprung erlaubt.

## Wie Subresource Integrity hilft

Websites entscheiden sich manchmal dafür, sich auf eine Drittpartei wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu verlassen, um einige ihrer Ressourcen zu hosten, anstatt alle Ressourcen selbst zu hosten. Ein Dokument, das beispielsweise von `https://example.com` bereitgestellt wird, könnte eine Ressource von einem anderen Standort einbinden:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt das Risiko, dass ein Angreifer, wenn er die Kontrolle über den Drittanbieter-Host erlangt, beliebigen bösartigen Inhalt in seine Dateien injizieren (oder die Dateien vollständig ersetzen) und damit möglicherweise auch Websites angreifen kann, die Dateien davon abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken solcher Angriffe zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, geliefert wurden, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien injiziert hat — und ohne dass jegliche Art von Änderungen an diesen Dateien vorgenommen wurden.

## Verwendung von Subresource Integrity

Sie verwenden die Subresource Integrity-Funktion, indem Sie einen Base64-codierten kryptografischen Hash einer Ressource (Datei) angeben, die Sie dem Browser zum Abrufen anweisen, und zwar im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das einen bestimmten Hash-Algorithmus angibt (derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich und endet mit dem eigentlichen Base64-codierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel für einen `integrity`-String mit Base64-codiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

`oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` ist der "Hash"-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Wertes ist streng genommen ein **_kryptografischer_ _Digest_**, der durch Anwenden einer bestimmten Hash-Funktion auf eine Eingabe (z.B. eine Skript- oder Stylesheet-Datei) gebildet wird. Es ist jedoch üblich, die Kurzform "Hash" zu verwenden, um _kryptografischen_ _Digest_ zu bedeuten, daher wird dies in diesem Artikel verwendet.

### Werkzeuge zur Generierung von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Tool, mit dem Sie SRI-Hashes generieren können.

#### Verwendung von OpenSSL

Sie können SRI-Hashes von der Befehlszeile aus mit **OpenSSL** generieren, indem Sie einen Befehl wie folgt ausführen:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Tool zur Generierung von SRI-Hashes mit folgendem Code erstellen:

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

1. Speichern Sie diesen Code in einer Datei namens `sri-hash.bat` im Windows SendTo-Ordner in Ihrer Umgebung (z.B. `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an...** und wählen Sie dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfenster.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Falls OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Website des Projekts](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine binären Distributionen von OpenSSL, führt jedoch eine informelle Liste von Drittanbieter-Distributionen: https://github.com/openssl/openssl/wiki/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) generieren, indem Sie einen Befehl wie folgt ausführen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der Pipe-durch `xxd`-Schritt nimmt die hexadezimale Ausgabe von `shasum` und konvertiert sie in Binärformat.
- Der Pipe-durch `awk`-Schritt ist notwendig, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` übergibt. Das kann katastrophale Folgen haben, wenn der Dateiname gültige Hex-Zeichen enthält — weil `xxd` das ebenfalls dekodieren und an `base64` übergeben würde.

### Cross-Origin Resource Sharing und Subresource Integrity

Für die Überprüfung der Subresource Integrity einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, überprüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, das Teilen mit dem anfordernden Ursprung erlaubt. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header bereitgestellt werden, der das Teilen der Ressource mit dem anfordernden Ursprung erlaubt; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Wie Browser Subresource Integrity behandeln

Browser behandeln SRI durch folgende Schritte:

1. Wenn ein Browser auf ein {{HTMLElement("script")}} oder {{HTMLElement("link")}} Element mit einem `integrity`-Attribut trifft, muss der Browser, bevor er das Skript ausführt oder bevor er ein Stylesheet anwendet, das vom {{HTMLElement("link")}}-Element angegeben wird, das Skript oder Stylesheet zunächst mit dem erwarteten Hash im `integrity`-Wert vergleichen.

   Für die Überprüfung der Subresource Integrity einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, überprüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, das Teilen mit dem anfordernden Ursprung erlaubt.

2. Wenn das Skript oder Stylesheet nicht mit seinem zugehörigen `integrity`-Wert übereinstimmt, muss der Browser die Ausführung des Skripts verweigern oder das Stylesheet nicht anwenden und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Integritätspolitik

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header ermöglichen es einem Dokument, eine Richtlinie hinsichtlich der Integritätsmetadatenanforderungen an geladene Subressourcen bestimmter Typen (derzeit nur Skripte) durchzusetzen.

Wenn ein `Integrity-Policy`-Header angegeben ist, blockiert der Browser Anfragen mit [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus oder ohne ein `integrity`-Attribut und wird Verstöße melden, sofern ein gültiger Meldungsendpunkt angegeben ist.
Wenn ein `Integrity-Policy-Report-Only`-Header angegeben ist, lässt der Browser Anfragen zu, die gegen die Richtlinie verstoßen, meldet jedoch Verstöße an den Meldungsendpunkt (wenn ein gültiger Meldungsendpunkt angegeben ist).

Entwickler würden typischerweise `Integrity-Policy-Report-Only` als ersten Schritt in ihrer Integritätspolitik einsetzen, um sicherzustellen, dass alle in ihren Dokumenten geladenen Skripte über geeignete Integritätsmetadaten verfügen. Sobald sie sehen, dass keine Verstöße gemeldet werden, wissen sie, dass sie die Blockierung mit dem `Integrity-Policy`-Header aktivieren können, ohne das Risiko von Benutzerproblemen einzugehen.

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Definiert eine Liste von [Anforderungszielen](/de/docs/Web/API/Request/destination), die blockiert werden sollen. Der einzige erlaubte Wert ist `script`.
- `sources` {{optional_inline}}
  - : Definiert eine Liste von Integritätsquellen. Der Standardwert und derzeit einzig unterstützte Wert ist `inline`. Infolgedessen hat das Hinzufügen von `sources=(inline)` zum Header einen ähnlichen Effekt wie das Weglassen von `sources`.
- `endpoints` {{optional_inline}}
  - : Definiert eine Liste von [Meldungsendpunkten](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). Die Meldungsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert werden.

In Fällen, in denen eine Anforderung durch eine Integritätspolitik blockiert wird, wird ein Verstoßbericht des [Reporting API](/de/docs/Web/API/Reporting_API) mit dem Typ `integrity-violation` erstellt und ein Body des Typs [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) erstellt, der Informationen wie die URL des Dokuments und der blockierten Ressource enthält.

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

## Beispiele

In den folgenden Beispielen wird angenommen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als erwarteter SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und eine Kopie des Skripts unter `https://example.com/example-framework.js` gehostet wird.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er, bevor er das Skript `https://example.com/example-framework.js` ausführt, das Skript zuerst mit dem erwarteten Hash vergleichen und bestätigen muss, dass es übereinstimmt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS settings attributes](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

### Integritätsdurchsetzung mit dem `Integrity-Policy`-Header

Sie können den {{httpheader("Integrity-Policy")}}-Header zu Ihrem Dokument hinzufügen, um sicherzustellen, dass alle externen Skripte, die es lädt, mit Integrität geladen werden (und nicht im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus geladen werden)

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

Falls Sie sich nicht sicher sind, ob alle Ihre externen Skripte über Integritätsmetadaten verfügen, können Sie die nur-berichts-Version der Funktion aktivieren und beginnen, Berichte über Verstöße zu erhalten.
Sie können das mit dem {{httpheader("Integrity-Policy-Report-Only")}}-Header tun.

```http
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
