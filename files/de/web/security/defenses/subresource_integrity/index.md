---
title: Subresource Integrity
slug: Web/Security/Defenses/Subresource_Integrity
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

**Subresource Integrity** (SRI) ist ein Sicherheitsfeature, das es Browsern ermöglicht zu überprüfen, ob die von ihnen abgerufenen Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Manipulation geliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, der mit der abgerufenen Ressource übereinstimmen muss.

> [!NOTE]
> Für die Überprüfung der Subresource Integrity einer Ressource, die von einem anderen Ursprung als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, prüfen Browser die Ressource zusätzlich mit Hilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfragenden Ursprung zu teilen.

## Wie Subresource Integrity hilft

Webseiten verlassen sich manchmal auf Dritte wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}}, um einige ihrer Ressourcen zu hosten, anstatt alle ihre Ressourcen selbst zu hosten. Ein Dokument, das beispielsweise von `https://example.com` bereitgestellt wird, könnte eine Ressource von einem anderen Ort enthalten:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt ein Risiko, da wenn ein Angreifer Kontrolle über den Drittanbieter-Host erlangt, dieser beliebigen bösartigen Inhalt in seine Dateien einfügen (oder die Dateien vollständig ersetzen) und somit möglicherweise auch die Seiten angreifen kann, die Dateien von dort abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken solcher Angriffe zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, geliefert wurden, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien eingefügt hat — und ohne dass jegliche andere Änderungen an diesen Dateien vorgenommen wurden.

## Verwendung von Subresource Integrity

Sie verwenden das Subresource Integrity-Feature, indem Sie einen base64-kodierten kryptografischen Hash einer Ressource (Datei), die Sie den Browser anweisen abzurufen, im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angeben.

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das einen bestimmten Hash-Algorithmus angibt (derzeit sind die zulässigen Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich und endet mit dem eigentlichen base64-kodierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel eines `integrity`-Strings mit base64-kodiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Also ist `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` der „Hash“-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der „Hash“-Teil eines `integrity`-Wertes ist streng genommen ein **_kryptografischer_ _Digest_**, der durch Anwendung einer bestimmten Hash-Funktion auf einige Eingaben (z.B. eine Skript- oder Stylesheet-Datei) gebildet wird. Es ist jedoch üblich, die Kurzform „Hash“ zu verwenden, um _kryptografischer_ _Digest_ zu meinen, daher wird dies in diesem Artikel so gehandhabt.

### Werkzeuge zum Erstellen von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://srihash.org/) ist ein Online-Tool, das Sie verwenden können, um SRI-Hashes zu generieren.

#### Verwendung von OpenSSL

Sie können SRI-Hashes über die Befehlszeile mit **OpenSSL** generieren, indem Sie einen Befehl wie diesen aufrufen:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Tool erstellen, um SRI-Hashes mit folgendem Code zu generieren:

```batch
@echo off
set bits=384
openssl dgst -sha%bits% -binary %1% | openssl base64 -A > tmp
set /p a= < tmp
del tmp
echo sha%bits%-%a%
pause
```

Um diesen Code zu nutzen:

1. Speichern Sie den Code in einer Datei namens `sri-hash.bat` im SendTo-Ordner in Ihrer Windows-Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an…**, und wählen Sie dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfenster.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Falls OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projekt-Website](https://www.openssl.org/) für Informationen zum Download und zur Installation. Das OpenSSL-Projekt hostet keine eigenen Binärverteilungen von OpenSSL, unterhält aber eine informelle Liste von Drittanbieterverteilungen: https://github.com/openssl/openssl/wiki/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) generieren, indem Sie einen Befehl wie diesen aufrufen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der Durchlauf durch `xxd` konvertiert die hexadezimale Ausgabe von `shasum` in binäre Daten.
- Der Durchlauf durch `awk` ist notwendig, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` weitergibt. Dies kann katastrophale Folgen haben, wenn der Dateiname gültige Hex-Zeichen enthält — da `xxd` dies ebenfalls dekodiert und an `base64` weitergibt.

### Cross-Origin Resource Sharing und Subresource Integrity

Für die Überprüfung der Subresource Integrity einer Ressource, die von einem anderen Ursprung als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, prüfen Browser die Ressource zusätzlich mit Hilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfragenden Ursprung zu teilen. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header bereitgestellt werden, der es erlaubt, die Ressource mit dem anfragenden Ursprung zu teilen; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Wie Browser mit Subresource Integrity umgehen

Browser verarbeiten SRI, indem sie folgendes tun:

1. Wenn ein Browser auf ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut trifft, vergleicht der Browser vor der Ausführung des Skripts oder bevor ein vom {{HTMLElement("link")}}-Element angegebenes Stylesheet angewendet wird, dieses Skript oder Stylesheet mit dem erwarteten Hash, der im `integrity`-Wert angegeben ist.

   Für die Überprüfung der Subresource Integrity einer Ressource, die von einem anderen Ursprung als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, prüfen Browser die Ressource zusätzlich mit Hilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfragenden Ursprung zu teilen.

2. Wenn das Skript oder Stylesheet nicht mit seinem zugeordneten `integrity`-Wert übereinstimmt, muss der Browser verweigern, das Skript auszuführen oder das Stylesheet anzuwenden, und muss stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Integritätsrichtlinie

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header ermöglichen es einem Dokument, eine Richtlinie bezüglich der Anforderungen an Integritätsmetadaten für geladene Skript- und Stylesheet-Ressourcen durchzusetzen.

Wenn ein `Integrity-Policy`-Header angegeben ist, blockiert der Browser Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus oder ohne ein `integrity`-Attribut und wird Verstöße melden, wenn ein gültiger Melde-Endpunkt spezifiziert ist. Wenn ein `Integrity-Policy-Report-Only`-Header angegeben ist, erlaubt der Browser Anfragen, die die Richtlinie verletzen, wird aber Verstöße an den Melde-Endpunkt melden (wenn ein gültiger Melde-Endpunkt spezifiziert ist).

Entwickler würden typischerweise `Integrity-Policy-Report-Only` als ersten Implementierungsschritt in ihrem Integritätsrichtlinien-Prozess verwenden, um sicherzustellen, dass alle in ihren Dokumenten geladenen Skripte und Stylesheets über geeignete Integritätsmetadaten verfügen. Sobald sie feststellen, dass keine Verletzungsmeldungen eingehen, könnten sie sicher sein, dass sie die Blockierung mit dem `Integrity-Policy`-Header aktivieren können, ohne das Risiko einzugehen, dass es zu Benutzer-bezogenen Problemen kommt.

Die Header-Werte sind als strukturierte Felddictionaries mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Definiert eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), die blockiert werden sollen. Die einzigen zulässigen Werte sind `script` und `style`.
- `sources` {{optional_inline}}
  - : Definiert eine Liste von Integritätsquellen. Der einzige derzeit unterstützte Wert ist `inline`. Das Hinzufügen von `sources=(inline)` zum Header hat daher eine ähnliche Wirkung wie das Weglassen von `sources`.
- `endpoints` {{optional_inline}}
  - : Definiert eine Liste von [Melde-Endpunkten](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). Die Melde-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert werden.

In Fällen, in denen eine Anfrage durch eine Integritätsrichtlinie blockiert wird, wird ein [Reporting API](/de/docs/Web/API/Reporting_API) Verstoßbericht mit einer Typ-Eigenschaft von `integrity-violation` und der durch [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport) definierten Struktur erstellt, die Informationen wie die URL des Dokuments und der blockierten Ressource enthält.

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

In den folgenden Beispielen nehmen wir an, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als der erwartete SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und dass es eine Kopie des Skripts unter `https://example.com/example-framework.js` gibt.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser zu signalisieren, dass er, bevor er das Skript `https://example.com/example-framework.js` ausführt, dieses zuerst mit dem erwarteten Hash vergleichen und überprüfen muss, ob eine Übereinstimmung vorliegt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

### Integritätsdurchsetzung mit dem `Integrity-Policy`-Header

Sie können den {{httpheader("Integrity-Policy")}}-Header zu Ihrem Dokument hinzufügen, um sicherzustellen, dass die geladenen externen Ressourcen (in diesem Fall Skripte) mit Integrität geladen werden (und nicht im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus geladen werden).

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

Wenn Sie nicht sicher sind, ob alle externen Skripte Integritätsmetadaten haben, können Sie die nur berichtende Version der Funktion aktivieren und beginnen, Berichte über Verstöße zu erhalten. Sie können dies mit dem {{httpheader("Integrity-Policy-Report-Only")}}-Header tun.

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
