---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: 32f4ac98e57f420470176f2468f514d959600471
---

**Subresource Integrity** (SRI) ist ein Sicherheitsmerkmal, das es Browsern ermöglicht, zu überprüfen, dass Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulation geliefert werden. Es funktioniert, indem Sie einen kryptographischen Hash angeben, den eine abgerufene Ressource zu erfüllen hat.

> [!NOTE]
> Zur Subresource-Integritätsprüfung einer Ressource, die von einer anderen als der eingebetteten Ursprungsquelle bereitgestellt wird, prüfen Browser zusätzlich die Ressource mithilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass die Ursprungsquelle, die die Ressource bereitstellt, deren gemeinsame Nutzung mit der anfordernden Ursprungsquelle erlaubt.

## Wie Subresource Integrity hilft

Websites entscheiden sich manchmal dafür, sich auf eine Drittpartei wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu verlassen, um einige ihrer Ressourcen zu hosten, anstatt alle Ressourcen selbst zu hosten. Beispielsweise könnte ein Dokument, das von `https://example.com` bereitgestellt wird, eine Ressource von einem anderen Standort einbeziehen:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt das Risiko, dass ein Angreifer, der die Kontrolle über den Drittanbieter-Host erlangt, beliebige schädliche Inhalte in seine Dateien einfügen (oder die Dateien vollständig ersetzen) und somit auch potenziell Websites angreifen kann, die Dateien von diesem abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken solcher Angriffe zu mindern, indem sichergestellt wird, dass die von Ihrer Webanwendung oder Ihrem Webdokument abgerufenen Dateien ohne zusätzliche, von einem Angreifer eingefügte Inhalte und ohne jegliche Änderungen an diesen Dateien geliefert werden.

## Verwendung von Subresource Integrity

Sie verwenden die Funktion Subresource Integrity, indem Sie einen base64-kodierten kryptografischen Hash einer Ressource (Datei), die Sie dem Browser zum Abrufen anweisen, im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angeben.

Ein `integrity`-Wert beginnt mit mindestens einem Zeichenfolgen, wobei jede Zeichenfolge ein Präfix enthält, das einen bestimmten Hash-Algorithmus angibt (derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich, und endet mit dem tatsächlichen base64-kodierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel einer `integrity`-Zeichenfolge mit base64-kodiertem sha384 Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Das `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` ist also der "Hash"-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Werts ist streng genommen ein **_kryptografischer_ _Digest_**, der durch Anwenden einer bestimmten Hash-Funktion auf eine Eingabe (z. B. eine Skript- oder Stylesheet-Datei) gebildet wird. Aber es ist üblich, die Abkürzung "Hash" zu verwenden, um _kryptografischen_ _Digest_ zu bedeuten, daher wird in diesem Artikel diese Kurzform verwendet.

### Tools zum Generieren von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Tool, mit dem Sie SRI-Hashes generieren können.

#### Verwendung von OpenSSL

Sie können SRI-Hashes von der Kommandozeile aus mit **OpenSSL** generieren, indem Sie einen Befehl wie den folgenden ausführen:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Tool zum Generieren von SRI-Hashes mit dem folgenden Code erstellen:

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

1. Speichern Sie den Code in einer Datei mit dem Namen `sri-hash.bat` im Windows-`SendTo`-Ordner Ihrer Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an...** und anschließend `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfenster.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Falls OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [Website des OpenSSL-Projekts](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine Binärverteilungen von OpenSSL, hält aber eine informelle Liste von Drittanbieter-Verteilungen bereit: https://github.com/openssl/openssl/wiki/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) generieren, indem Sie einen Befehl wie den folgenden ausführen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der Schritt `xxd` nach der Pipe übernimmt die hexadezimale Ausgabe von `shasum` und konvertiert sie in Binärdaten.
- Der `awk`-Schritt nach der Pipe ist notwendig, da `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` weitergeben würde. Das könnte katastrophale Folgen haben, wenn der Dateiname gültige Hex-Zeichen enthält – weil `xxd` diese ebenfalls dekodiert und an `base64` weitergibt.

### Cross-Origin Resource Sharing und Subresource Integrity

Zur Subresource-Integritätsprüfung einer Ressource, die von einem anderen als dem eingebetteten Ursprungsort bereitgestellt wird, prüfen Browser zusätzlich die Ressource mithilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass die Ursprungsquelle, die die Ressource bereitstellt, deren gemeinsame Nutzung mit der anfordernden Ursprungsquelle erlaubt. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header bereitgestellt werden, der es ermöglicht, die Ressource mit der anfordernden Ursprungsquelle zu teilen; beispielsweise:

```http
Access-Control-Allow-Origin: *
```

## Wie Browser Subresource Integrity handhaben

Browser handhaben SRI, indem sie Folgendes tun:

1. Wenn ein Browser ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut erkennt, muss der Browser, bevor er das Skript ausführt oder ein durch das {{HTMLElement("link")}}-Element angegebenes Stylesheet anwendet, zuerst das Skript oder Stylesheet mit dem erwarteten Hash im `integrity`-Wert vergleichen.

   Zur Subresource-Integritätsprüfung einer Ressource, die von einem anderen als dem eingebetteten Ursprungsort bereitgestellt wird, prüfen Browser zusätzlich die Ressource mithilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass die Ressource von der Ursprungsquelle, die sie bereitstellt, mit der anfordernden Ursprungsquelle geteilt werden darf.

2. Wenn das Skript oder Stylesheet nicht mit dem zugehörigen `integrity`-Wert übereinstimmt, muss der Browser die Ausführung des Skripts verweigern oder das Stylesheet nicht anwenden, sondern stattdessen einen Netzwerkfehler melden, der anzeigt, dass das Abrufen des Skripts oder Stylesheets fehlgeschlagen ist.

## Integritätsrichtlinie

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} ermöglichen es einem Dokument, eine Richtlinie bezüglich der Integritätsmetadatenanforderungen für geladene Skript- und Stylesheet-Unterressourcen durchzusetzen.

Wenn ein `Integrity-Policy`-Header angegeben ist, blockiert der Browser Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus oder ohne ein `integrity`-Attribut, und meldet auch Verstöße, wenn ein gültiger Berichts-Endpunkt angegeben ist.
Wenn ein `Integrity-Policy-Report-Only`-Header angegeben ist, erlaubt der Browser Anfragen, die gegen die Richtlinie verstoßen, meldet jedoch Verstöße an den Berichts-Endpunkt (wenn ein gültiger Berichts-Endpunkt angegeben ist).

Entwickler würden typischerweise `Integrity-Policy-Report-Only` als ersten Deployment-Schritt in ihrer Integritätsrichtlinienreise verwenden, um sicherzustellen, dass alle in ihren Dokumenten geladenen Skripte und Stylesheets entsprechende Integritätsmetadaten haben. Sobald sie feststellen, dass keine Verstöße gemeldet werden, wissen sie, dass sie das Blockieren mithilfe des `Integrity-Policy`-Headers ohne Risiko von Benutzerproblemen aktivieren können.

Die Header-Werte sind als strukturierte Felddateien mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Definiert eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), die blockiert werden sollen. Die einzigen erlaubten Werte sind `script` und `style`.
- `sources` {{optional_inline}}
  - : Definiert eine Liste von Integritätsquellen. Der Standardwert und der einzige derzeit unterstützte Wert ist `inline`. Daher hat das Hinzufügen von `sources=(inline)` zum Header eine ähnliche Wirkung wie das Weglassen von `sources`.
- `endpoints` {{optional_inline}}
  - : Definiert eine Liste von [Berichts-Endpunkten](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). Die Berichts-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert sein.

In Fällen, in denen eine Anfrage durch eine Integritätsrichtlinie blockiert wird, wird ein [Reporting API](/de/docs/Web/API/Reporting_API)-Verstoßbericht mit einem Typ von `integrity-violation` und einem Body vom Typ [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) erstellt, der Informationen wie die URL des Dokuments und der blockierten Ressource enthält.

Ein typischer Bericht könnte folgendermaßen aussehen:

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

In den folgenden Beispielen nehmen wir an, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als der erwartete SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und dass es eine Kopie des Skripts unter `https://example.com/example-framework.js` gibt.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er vor der Ausführung des Skripts `https://example.com/example-framework.js` das Skript mit dem erwarteten Hash vergleichen und überprüfen muss, dass es eine Übereinstimmung gibt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

### Integritätsdurchsetzung mit dem `Integrity-Policy`-Header

Sie können den {{httpheader("Integrity-Policy")}}-Header zu Ihrem Dokument hinzufügen, um sicherzustellen, dass die von ihm geladenen externen Ressourcen (in diesem Fall Skripte) mit Integrität geladen werden (und nicht im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus geladen werden).

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

Wenn Sie sich nicht sicher sind, ob alle externen Skripte Integritätsmetadaten haben, können Sie die Berichts-Only-Version des Features aktivieren und beginnen, Berichte über Verstöße zu erhalten. Sie können dies mit dem {{httpheader("Integrity-Policy-Report-Only")}}-Header tun.

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
