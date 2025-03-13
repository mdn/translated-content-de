---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Subresource Integrity** (SRI) ist ein Sicherheitsmerkmal, das es Browsern ermöglicht, zu überprüfen, dass die von ihnen abgerufenen Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Manipulation geliefert werden. Dies geschieht, indem Sie dem Browser einen kryptographischen Hash bereitstellen, den eine abgerufene Ressource erfüllen muss.

> [!NOTE]
> Für die Subresource-Integrity-Verifizierung einer Ressource, die von einem anderen Ursprung als dem des eingebetteten Dokuments bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, mit dem anfordernden Ursprung geteilt zu werden.

## Wie Subresource Integrity hilft

Webseiten entscheiden sich manchmal dafür, sich auf Dritte wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu verlassen, um einige ihrer Ressourcen zu hosten, anstatt alle Ressourcen selbst zu hosten. Beispielsweise könnte ein Dokument von `https://example.com` eine Ressource von einem anderen Ort einbinden:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt das Risiko, dass ein Angreifer, wenn er die Kontrolle über den Drittanbieter gewinnt, beliebigen bösartigen Inhalt in seine Dateien einschleusen (oder die Dateien komplett ersetzen) und somit potenziell auch Websites angreifen kann, die Dateien von dort abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken von Angriffen wie diesem zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien eingebracht hat, geliefert werden — und dass keinerlei Änderungen jeglicher Art an diesen Dateien vorgenommen wurden.

## Verwendung von Subresource Integrity

Sie nutzen die Subresource Integrity-Funktion, indem Sie einen base64-codierten kryptographischen Hash einer Ressource (Datei), von der Sie dem Browser sagen, er solle sie abrufen, im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload), oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angeben.

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das einen bestimmten Hash-Algorithmus angibt (aktuell sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich, und endet mit dem tatsächlichen base64-codierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel eines `integrity`-Strings mit base64-codiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Also ist `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` der "Hash"-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Werts ist genau genommen ein **_kryptographischer Digest_**, der durch das Anwenden einer bestimmten Hash-Funktion auf eine Eingabe (zum Beispiel eine Skript- oder Stylesheet-Datei) gebildet wird. Aber es ist üblich, die Abkürzung "Hash" zu verwenden, um _kryptographischen Digest_ zu meinen, weshalb dies in diesem Artikel verwendet wird.

### Tools zum Erzeugen von SRI-Hashes

#### SRI-Hash-Generator

Der [SRI-Hash-Generator](https://www.srihash.org/) ist ein Online-Tool, das Sie verwenden können, um SRI-Hashes zu erzeugen.

#### Verwendung von OpenSSL

Sie können SRI-Hashes von der Befehlszeile aus mit **OpenSSL** erzeugen, indem Sie einen Befehl aufrufen wie:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Tool zum Erzeugen von SRI-Hashes erstellen, indem Sie den folgenden Code verwenden:

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

1. Speichern Sie diesen Code in einer Datei mit dem Namen `sri-hash.bat` im SendTo-Ordner Ihrer Windows-Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Dateiexplorer, wählen Sie **Senden an…**, und wählen Sie dann `sri-hash`. Sie sehen den `integrity`-Wert in einem Befehlsfenster.
3. Wählen Sie den `integrity`-Wert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Wenn OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projektwebsite](https://www.openssl.org/) für Informationen über das Herunterladen und Installieren. Das OpenSSL-Projekt hostet keine binären OpenSSL-Distributionen, pflegt aber eine informelle Liste von Drittanbieter-Distributionen: https://wiki.openssl.org/index.php/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mithilfe von [**shasum**](https://linux.die.net/man/1/shasum) erzeugen, indem Sie einen Befehl aufrufen wie:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der Schritt `xxd` nimmt die hexadezimale Ausgabe von `shasum` und konvertiert sie in Binärformat.
- Der Schritt `awk` ist notwendig, weil `shasum` den Dateinamen des Hashs in seiner Ausgabe an `xxd` übergibt. Das kann fatale Konsequenzen haben, wenn der Dateiname zufällig gültige Hex-Zeichen enthält — weil `xxd` dies ebenfalls dekodieren und an `base64` weiterleiten würde.

### Cross-Origin Resource Sharing und Subresource Integrity

Für die Subresource-Integrity-Verifizierung einer Ressource, die von einem anderen Ursprung als dem des eingebetteten Dokuments bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, mit dem anfordernden Ursprung geteilt zu werden. Deshalb muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header, der es erlaubt, die Ressource mit dem anfordernden Ursprung zu teilen, bereitgestellt werden; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Beispiele

In den folgenden Beispielen wird angenommen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als erwarteter SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und es eine Kopie des Skripts bei `https://example.com/example-framework.js` gibt.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser zu sagen, dass er, bevor das Skript `https://example.com/example-framework.js` ausgeführt wird, das Skript zuerst mit dem erwarteten Hash vergleichen und überprüfen muss, ob es eine Übereinstimmung gibt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Weitere Details zum Zweck des `crossorigin`-Attributs finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin).

## Wie Browser Subresource Integrity behandeln

Browser behandeln SRI, indem sie Folgendes tun:

1. Wenn ein Browser auf ein {{HTMLElement("script")}} oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut stößt, muss er, bevor das Skript ausgeführt wird oder bevor ein Stylesheet, das durch das {{HTMLElement("link")}}-Element angegeben wird, angewendet wird, das Skript oder Stylesheet zuerst mit dem erwarteten Hash im `integrity`-Wert vergleichen.

   Für die Subresource-Integrity-Verifizierung einer Ressource, die von einem anderen Ursprung als dem des eingebetteten Dokuments bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, mit dem anfordernden Ursprung geteilt zu werden.

2. Wenn das Skript oder das Stylesheet nicht mit dem zugehörigen `integrity`-Wert übereinstimmt, muss der Browser sich weigern, das Skript auszuführen oder das Stylesheet anzuwenden und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
