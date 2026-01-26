---
title: Subresource Integrity
slug: Web/Security/Defenses/Subresource_Integrity
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

**Subresource Integrity** (SRI) ist ein Sicherheitsmerkmal, das es Browsern ermöglicht zu überprüfen, ob die geladenen Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Manipulation geliefert wurden. Dies funktioniert, indem Sie einen kryptografischen Hash bereitstellen, den eine geladene Ressource erfüllen muss.

> [!NOTE]
> Bei der Überprüfung der Subresource-Integrität einer Ressource, die von einem anderen Ursprung als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, prüfen Browser die Ressource zusätzlich mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfragenden Ursprung zu teilen.

## Wie Subresource Integrity hilft

Websites entscheiden sich manchmal dafür, auf einen Drittanbieter wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu verzichten, um einige ihrer Ressourcen zu hosten, anstatt alle ihre Ressourcen selbst zu hosten. Zum Beispiel könnte ein von `https://example.com` geliefertes Dokument eine Ressource von einem anderen Ort beinhalten:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt ein Risiko, denn wenn ein Angreifer die Kontrolle über den Drittanbieter-Host erlangt, kann der Angreifer beliebigen schädlichen Inhalt in seine Dateien injizieren (oder die Dateien komplett ersetzen) und somit potenziell auch Seiten angreifen, die Dateien von dort abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken solcher Angriffe zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, geliefert wurden, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien eingefügt hat — und ohne, dass an diesen Dateien sonstige Änderungen jeglicher Art vorgenommen wurden.

## Verwendung von Subresource Integrity

Sie verwenden die Subresource Integrity-Funktion, indem Sie einen Base64-codierten kryptografischen Hash einer Ressource (Datei) angeben, die Sie dem Browser zum Laden anweisen, im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload).

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das einen bestimmten Hash-Algorithmus angibt (derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich und endet mit dem eigentlichen Base64-codierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere Hashes enthalten, die durch Leerzeichen getrennt sind. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel `integrity`-String mit Base64-codiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

`oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` ist der "Hash"-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Wertes ist strenggenommen ein **_kryptografischer_ _Digest_**, der durch Anwenden einer bestimmten Hashfunktion auf einen Eingabewert (zum Beispiel eine Skript- oder Stylesheet-Datei) erzeugt wird. Aber es ist üblich, den Kurzausdruck "Hash" zu verwenden, um _kryptografischer_ _Digest_ zu bedeuten, daher wird dieser Ausdruck in diesem Artikel verwendet.

### Werkzeuge zur Generierung von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://srihash.org/) ist ein Online-Tool, das Sie verwenden können, um SRI-Hashes zu generieren.

#### Verwendung von OpenSSL

Sie können SRI-Hashes über die Befehlszeile mit **OpenSSL** generieren, mit einem Befehl wie:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Tool zur Generierung von SRI-Hashes mit dem folgenden Code erstellen:

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

1. Speichern Sie diesen Code in einer Datei namens `sri-hash.bat` im Windows-SendTo-Ordner Ihrer Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Explorer, wählen Sie **Senden an...** und dann `sri-hash`. Sie werden den Integritätswert in einem Befehlsfenster sehen.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Wenn OpenSSL auf Ihrem System nicht installiert ist, besuchen Sie die [OpenSSL-Projekt-Website](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine Binärverteilungen von OpenSSL, unterhält aber eine informelle Liste von Drittanbieter-Distributionen: https://github.com/openssl/openssl/wiki/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) mit einem Befehl wie diesem generieren:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der Pipe-Schritt `xxd` konvertiert die hexadezimale Ausgabe von `shasum` in Binärdaten.
- Der Pipe-Schritt `awk` ist notwendig, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` übergibt. Dies kann katastrophale Folgen haben, wenn der Dateiname gültige Hex-Zeichen enthält — `xxd` würde das dann ebenfalls dekodieren und an `base64` übergeben.

### Cross-Origin Resource Sharing und Subresource Integrity

Bei der Überprüfung der Subresource-Integrität einer Ressource, die von einem anderen Ursprung als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, prüfen Browser die Ressource zusätzlich mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfragenden Ursprung zu teilen. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header bereitgestellt werden, der es erlaubt, die Ressource mit dem anfragenden Ursprung zu teilen; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Wie Browser Subresource Integrity behandeln

Browser behandeln SRI, indem sie Folgendes tun:

1. Wenn ein Browser auf ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut stößt, muss der Browser vor der Ausführung des Skripts oder der Anwendung eines durch das {{HTMLElement("link")}}-Element angegebenen Stylesheets das Skript oder Stylesheet zuerst mit dem erwarteten Hash abgleichen, der im `integrity`-Wert angegeben ist.

   Bei der Überprüfung der Subresource-Integrität einer Ressource, die von einem anderen Ursprung als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, prüfen Browser die Ressource zusätzlich mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfragenden Ursprung zu teilen.

2. Wenn das Skript oder Stylesheet nicht mit dem zugeordneten `integrity`-Wert übereinstimmt, muss der Browser die Ausführung des Skripts oder die Anwendung des Stylesheets verweigern und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Integritätspolitik

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header ermöglichen es einem Dokument, eine Richtlinie in Bezug auf die Anforderungen an Integritätsmetadaten für geladene Skript- und Stylesheet-Subressourcen durchzusetzen.

Wenn ein `Integrity-Policy`-Header angegeben wird, blockiert der Browser Anfragen mit [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus oder ohne `integrity`-Attribut und meldet auch Verstöße, wenn ein gültiger Berichterstattung-Endpunkt angegeben ist.
Wenn ein `Integrity-Policy-Report-Only`-Header angegeben wird, erlaubt der Browser Anfragen, die gegen die Richtlinie verstoßen, meldet jedoch Verstöße an den Berichterstattung-Endpunkt (wenn ein gültiger Berichterstattung-Endpunkt angegeben ist).

Entwickler würden typischerweise `Integrity-Policy-Report-Only` als ersten Einsatzschritt in ihrem Integrity Policy-Prozess verwenden, um sicherzustellen, dass alle Skripte und Stylesheets, die in ihren Dokumenten geladen werden, die entsprechenden Integritätsmetadaten haben. Sobald sie sehen, dass keine Berichtsverletzungen mehr eingehen, wissen sie, dass sie das Blockieren mit dem `Integrity-Policy`-Header aktivieren können, ohne das Risiko einzugehen, benutzerseitige Brüche zu verursachen.

Die Header-Werte sind als strukturierte Felddictionaires mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Definiert eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), die blockiert werden sollen. Die einzigen erlaubten Werte sind `script` und `style`.
- `sources` {{optional_inline}}
  - : Definiert eine Liste von Integritätsquellen. Der Standardwert und derzeit einzige unterstützte Wert ist `inline`. Somit hat das Hinzufügen von `sources=(inline)` zum Header eine ähnliche Wirkung wie das Auslassen von `sources`.
- `endpoints` {{optional_inline}}
  - : Definiert eine Liste von [Berichterstattung-Endpunkten](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). Die Berichterstattung-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert werden.

In Fällen, in denen eine Anfrage durch eine Integritätspolitik blockiert wird, wird ein [Reporting API](/de/docs/Web/API/Reporting_API)-Verletzungsbericht mit einem Typ von `integrity-violation` und einem Body vom Typ [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) erstellt, der Informationen wie die URL des Dokuments und die blockierte Ressource enthält.

Ein typischer Bericht könnte so aussehen:

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

In den folgenden Beispielen wird angenommen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als erwarteter SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und es eine Kopie des Skripts unter `https://example.com/example-framework.js` gibt.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er, bevor er das Skript `https://example.com/example-framework.js` ausführt, das Skript mit dem erwarteten Hash abgleichen und verifizieren muss, dass eine Übereinstimmung besteht.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

### Durchsetzung der Integrität mit dem `Integrity-Policy`-Header

Sie können den {{httpheader("Integrity-Policy")}}-Header zu Ihrem Dokument hinzufügen, um sicherzustellen, dass die externen Ressourcen, die es lädt (in diesem Fall Skripte), mit Integrität geladen werden (und nicht im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus geladen werden).

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

Wenn Sie sich nicht sicher sind, ob alle externen Skripte Integritätsmetadaten aufweisen, können Sie die nur-berichtsbasierte Version der Funktion aktivieren und beginnen, Berichte über Verstöße zu erhalten.
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
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://srihash.org/)
