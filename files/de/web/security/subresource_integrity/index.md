---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht, zu überprüfen, ob die Ressourcen, die sie abrufen (zum Beispiel von einem [CDN](/de/docs/Glossary/CDN)), ohne unerwartete Manipulationen bereitgestellt werden. Dies funktioniert, indem Sie einen kryptografischen Hash angeben, mit dem die abgerufene Ressource übereinstimmen muss.

> [!NOTE]
> Für die Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem Dokument bereitgestellt wird, in dem sie eingebettet ist, überprüfen Browser zusätzlich die Ressource mithilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, diese mit dem anfordernden Ursprung teilen darf.

## Wie Subresource Integrity hilft

Die Verwendung von [Content Delivery Networks (CDNs)](/de/docs/Glossary/CDN), um Dateien wie Skripte und Stylesheets, die zwischen mehreren Websites geteilt werden, zu hosten, kann die Leistung der Website verbessern und Bandbreite sparen. Die Verwendung von CDNs birgt jedoch auch ein Risiko. Wenn ein Angreifer die Kontrolle über ein CDN erlangt, kann er beliebige bösartige Inhalte in die Dateien auf dem CDN einfügen (oder die Dateien vollständig ersetzen) und somit potenziell alle Websites angreifen, die Dateien von diesem CDN abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken von Angriffen dieser Art zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument (von einem CDN oder anderswo) abruft, ohne dass ein Dritter zusätzlichen Inhalt in diese Dateien eingefügt hat — und ohne, dass irgendwelche anderen Änderungen jeglicher Art an diesen Dateien vorgenommen wurden.

## Verwendung von Subresource Integrity

Sie verwenden die Subresource Integrity-Funktion, indem Sie einen base64-kodierten kryptografischen Hash einer Ressource (Datei), die Sie dem Browser zum Abrufen anweisen, als Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload), oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angeben.

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix hat, das einen bestimmten Hash-Algorithmus angibt (derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich, und endet mit dem eigentlichen base64-kodierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel-`integrity`-String mit base64-kodiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Der "Hash"-Teil ist also `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC`, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Werts ist streng genommen ein **_kryptografischer_ _Digest_**, der durch Anwendung einer bestimmten Hash-Funktion auf eine Eingabe (zum Beispiel eine Skript- oder Stylesheet-Datei) gebildet wird. Aber es ist üblich, die Kurzform „Hash“ als Synonym für _kryptografischer_ _Digest_ zu verwenden, daher wird diese Kurzform auch in diesem Artikel verwendet.

### Werkzeuge zur Erzeugung von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Tool, das Sie zur Erzeugung von SRI-Hashes nutzen können.

#### Verwendung von OpenSSL

Sie können SRI-Hashes von der Kommandozeile aus mit **OpenSSL** und einem Befehl wie dem folgenden erzeugen:

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

Zum Verwenden dieses Codes:

1. Speichern Sie den Code in einer Datei namens `sri-hash.bat` im Windows-SendTo-Ordner Ihrer Umgebung (zum Beispiel, `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an…**, und wählen Sie dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfenster.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Falls OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projektwebsite](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine Binärdistributionen von OpenSSL, führt jedoch eine informelle Liste von Drittanbieter-Distributionen: https://wiki.openssl.org/index.php/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) und einem Befehl wie dem folgenden erzeugen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der `xxd`-Schritt nimmt die hexadezimale Ausgabe von `shasum` und konvertiert sie in Binär.
- Der `awk`-Schritt ist notwendig, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` übergibt. Das kann katastrophale Folgen haben, wenn der Dateiname gültige Hex-Zeichen enthält — weil `xxd` diesen ebenfalls dekodiert und an `base64` übergibt.

### Cross-Origin Resource Sharing und Subresource Integrity

Für die Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem Dokument bereitgestellt wird, in dem sie eingebettet ist, überprüfen Browser zusätzlich die Ressource mithilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, diese mit dem anfordernden Ursprung teilen darf. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) Header bereitgestellt werden, der erlaubt, die Ressource mit dem anfordernden Ursprung zu teilen, zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Beispiele

In den folgenden Beispielen wird angenommen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als erwarteter SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und dass es eine Kopie des Skripts unter `https://example.com/example-framework.js` gibt.

### Subresource Integrity mit dem \<script>-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er vor der Ausführung des Skripts `https://example.com/example-framework.js` das Skript erst mit dem erwarteten Hash vergleichen und sicherstellen muss, dass es übereinstimmt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

## Wie Browser mit Subresource Integrity umgehen

Browser gehen mit SRI folgendermaßen um:

1. Wenn ein Browser ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut begegnet, muss er vor der Ausführung des Skripts oder bevor ein durch das {{HTMLElement("link")}}-Element spezifiziertes Stylesheet angewendet wird, das Skript oder Stylesheet mit dem im `integrity`-Wert angegebenen erwarteten Hash vergleichen.

   Für die Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem Dokument bereitgestellt wird, in dem sie eingebettet ist, überprüfen Browser zusätzlich die Ressource mithilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, diese mit dem anfordernden Ursprung teilen darf.

2. Wenn das Skript oder Stylesheet nicht mit seinem zugeordneten `integrity`-Wert übereinstimmt, muss der Browser die Ausführung des Skripts oder die Anwendung des Stylesheets verweigern und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen des Skripts oder Stylesheets fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [Ein CDN, das Ihnen kein XSS einbrocken kann: Verwendung von Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
