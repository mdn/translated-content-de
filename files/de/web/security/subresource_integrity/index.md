---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Subresource Integrity** (SRI) ist ein Sicherheitsmerkmal, das es Browsern ermöglicht zu überprüfen, ob die von ihnen abgerufenen Ressourcen (z.B. von einem [CDN](/de/docs/Glossary/CDN)) ohne unerwartete Manipulationen bereitgestellt werden. Dies funktioniert, indem Ihnen die Möglichkeit gegeben wird, einen kryptografischen Hash anzugeben, mit dem die abgerufene Ressource übereinstimmen muss.

> [!NOTE]
> Für die Subresource-Integritätsüberprüfung einer Ressource, die von einem anderen Ursprungsort als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, überprüfen Browser zusätzlich die Ressource unter Verwendung von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, diese mit dem anfragenden Ursprung zu teilen.

## Wie Subresource Integrity hilft

Die Nutzung von [Content Delivery Networks (CDNs)](/de/docs/Glossary/CDN) zum Hosten von Dateien wie Skripten und Stylesheets, die auf mehreren Seiten geteilt werden, kann die Leistung von Websites verbessern und Bandbreite sparen. Die Nutzung von CDNs birgt jedoch auch Risiken, da ein Angreifer, der die Kontrolle über ein CDN erlangt, beliebigen bösartigen Inhalt in Dateien auf dem CDN einfügen (oder die Dateien vollständig ersetzen) und somit potenziell alle Websites angreifen kann, die Dateien von diesem CDN abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken von Angriffen wie diesem zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft (von einem CDN oder anderswo), ohne dass ein Dritter zusätzlichen Inhalt in diese Dateien eingefügt hat — und ohne dass überhaupt irgendwelche Änderungen an diesen Dateien vorgenommen wurden — bereitgestellt werden.

## Verwendung von Subresource Integrity

Sie verwenden die Subresource-Integritätsfunktion, indem Sie einen base64-codierten kryptografischen Hash einer Ressource (Datei), die Sie dem Browser zum Abrufen angeben, im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angeben.

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das einen bestimmten Hash-Algorithmus angibt (die derzeit zulässigen Präfixe sind `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich und endend mit dem eigentlichen base64-codierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel für einen `integrity`-String mit base64-codiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Somit ist `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` der "Hash"-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Werts ist streng genommen ein **_kryptografischer_ _Digest_**, der durch Anwenden einer bestimmten Hash-Funktion auf einige Eingabedaten (zum Beispiel eine Skript- oder Stylesheet-Datei) gebildet wird. Aber es ist üblich, die Kurzform "Hash" zu verwenden, um _kryptografischen_ _Digest_ zu bedeuten, und das wird in diesem Artikel verwendet.

### Werkzeuge zur Generierung von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Tool, mit dem Sie SRI-Hashes generieren können.

#### Verwendung von OpenSSL

Sie können SRI-Hashes von der Befehlszeile aus generieren, indem Sie **OpenSSL** mit einem Befehl wie folgt ausführen:

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

1. Speichern Sie diesen Code in einer Datei namens `sri-hash.bat` im Windows SendTo-Ordner in Ihrer Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an…** und wählen Sie dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfenster.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Sollte **OpenSSL** nicht auf Ihrem System installiert sein, besuchen Sie die [OpenSSL-Projektwebsite](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet keine binären Distributionen von OpenSSL selbst, pflegt jedoch eine informelle Liste von Drittanbieter-Distributionen: https://wiki.openssl.org/index.php/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) mit einer Befehlseingabe wie folgt generieren:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der Durchlauf durch `xxd` nimmt die hexadezimale Ausgabe von `shasum` und konvertiert sie in Binärform.
- Der Durchlauf durch `awk` ist erforderlich, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` weitergeben wird. Das kann katastrophale Folgen haben, wenn der Dateiname zufälligerweise gültige Hex-Zeichen enthält — weil `xxd` dies ebenfalls dekodieren und an `base64` weitergeben würde.

### Cross-Origin Resource Sharing und Subresource Integrity

Für die Subresource-Integritätsüberprüfung einer Ressource, die von einem anderen Ursprungsort als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, überprüfen Browser zusätzlich die Ressource unter Verwendung von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, diese mit dem anfragenden Ursprung zu teilen erlaubt. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)-Header bereitgestellt werden, der es erlaubt, die Ressource mit dem anfragenden Ursprung zu teilen, zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Beispiele

In den folgenden Beispielen wird davon ausgegangen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als der erwartete SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und dass es eine Kopie des Skripts unter `https://example.com/example-framework.js` gibt.

### Subresource Integrity mit dem \<script> Element

Sie können das folgende {{HTMLElement("script")}} benutzen, um einem Browser mitzuteilen, dass er das Skript `https://example.com/example-framework.js` vor der Ausführung mit dem erwarteten Hash vergleichen und verifizieren muss, dass eine Übereinstimmung besteht.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

## Wie Browser Subresource Integrity handhaben

Browser gehen bei der Handhabung von SRI wie folgt vor:

1. Wenn ein Browser auf ein {{HTMLElement("script")}} oder {{HTMLElement("link")}} mit einem `integrity`-Attribut stößt, muss er das Skript oder Stylesheet zuerst mit dem im `integrity`-Wert angegebenen erwarteten Hash vergleichen, bevor er das Skript ausführt oder ein Stylesheet anwendet, das durch das {{HTMLElement("link")}}-Element spezifiziert ist.

   Für die Subresource-Integritätsüberprüfung einer Ressource, die von einem anderen Ursprungsort als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, überprüfen Browser zusätzlich die Ressource unter Verwendung von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, diese mit dem anfragenden Ursprung zu teilen.

2. Wenn das Skript oder Stylesheet nicht mit seinem zugehörigen `integrity`-Wert übereinstimmt, muss der Browser die Ausführung des Skripts oder die Anwendung des Stylesheets ablehnen und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen des Skripts oder Stylesheets fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
