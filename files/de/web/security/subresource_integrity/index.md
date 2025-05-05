---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

**Subresource Integrity** (SRI) ist ein Sicherheitsfeature, das es Browsern ermöglicht zu überprüfen, ob die von ihnen abgerufenen Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Veränderungen geliefert werden. Es funktioniert, indem Sie einen kryptographischen Hash angeben, den eine abgerufene Ressource erfüllen muss.

> [!NOTE]
> Für die Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem des eingebetteten Dokuments bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, diese mit dem anfordernden Ursprung zu teilen.

## Wie Subresource Integrity hilft

Websites entscheiden sich manchmal dafür, sich auf einen Drittanbieter wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu stützen, um einige ihrer Ressourcen zu hosten, anstatt alle ihre Ressourcen selbst zu hosten. Beispielsweise könnte ein Dokument, das von `https://example.com` bereitgestellt wird, eine Ressource von einer anderen Quelle enthalten:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt das Risiko, dass, wenn ein Angreifer die Kontrolle über den Drittanbieter-Host erlangt, der Angreifer beliebige bösartige Inhalte in seine Dateien injizieren (oder die Dateien komplett ersetzen) kann und dadurch potenziell auch Websites attackieren kann, die Dateien von ihm abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken solcher Angriffe zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien injiziert hat – und ohne dass irgendwelche anderen Änderungen an diesen Dateien vorgenommen wurden – bereitgestellt werden.

## Verwendung von Subresource Integrity

Sie verwenden das Subresource Integrity-Feature, indem Sie einen base64-kodierten kryptographischen Hash einer Ressource (Datei) angeben, die Sie dem Browser zum Abrufen anweisen, indem Sie den Hash im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) festlegen.

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das einen bestimmten Hash-Algorithmus angibt (derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich und endet mit dem tatsächlichen base64-kodierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel für einen `integrity`-String mit base64-kodiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Also ist `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` der "Hash"-Teil, und das Präfix `sha384` gibt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Wertes ist streng genommen ein **_kryptographischer_ _Digest_**, der durch Anwenden einer bestimmten Hash-Funktion auf bestimmte Eingaben (z. B. eine Skript- oder Stylesheet-Datei) gebildet wird. Aber es ist üblich, die Abkürzung "Hash" zu verwenden, um _kryptographischer Digest_ zu bedeuten, daher wird dies in diesem Artikel verwendet.

### Werkzeuge zur Erstellung von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Tool, mit dem Sie SRI-Hashes generieren können.

#### Verwendung von OpenSSL

Sie können SRI-Hashes mithilfe der **OpenSSL**-Kommandozeile mit folgendem Befehl erstellen:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie mit dem folgenden Code ein Tool zur Generierung von SRI-Hashes erstellen:

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

1. Speichern Sie diesen Code in einer Datei namens `sri-hash.bat` im Windows-Ordner SendTo in Ihrer Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an…**, und wählen Sie dann `sri-hash`. Sie sehen den Integrity-Wert in einem Befehlsfeld.
3. Wählen Sie den Integrity-Wert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfeld zu schließen.

> [!NOTE]
> Wenn OpenSSL auf Ihrem System nicht installiert ist, besuchen Sie die [OpenSSL-Projekt-Website](https://www.openssl.org/) für Informationen über das Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine Binärverteilungen von OpenSSL, pflegt jedoch eine informelle Liste von Drittanbieter-Distributionen: https://github.com/openssl/openssl/wiki/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) mit einem Befehl wie diesem generieren:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der Pipe-Durchlauf `xxd` Schritt nimmt die hexadezimalen Ausgaben von `shasum` und konvertiert sie in Binärformat.
- Der Pipe-Durchlauf `awk` Schritt ist notwendig, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` weitergibt. Das kann katastrophale Folgen haben, wenn der Dateiname zufällig gültige Hex-Zeichen enthält – weil `xxd` das ebenfalls dekodieren und an `base64` weitergeben würde.

### Cross-Origin Resource Sharing und Subresource Integrity

Für die Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem des eingebetteten Dokuments bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, diese mit dem anfordernden Ursprung zu teilen. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header bereitgestellt werden, der es erlaubt, die Ressource mit dem anfordernden Ursprung zu teilen; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Beispiele

In den folgenden Beispielen gehen wir davon aus, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als erwarteter SHA-384-Hash (Digest) eines bestimmten Scripts `example-framework.js` bekannt ist und eine Kopie des Scripts unter `https://example.com/example-framework.js` gehostet wird.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er, bevor er das Script `https://example.com/example-framework.js` ausführt, zuerst das Script mit dem erwarteten Hash vergleichen und sicherstellen muss, dass eine Übereinstimmung vorliegt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

## Wie Browser mit Subresource Integrity umgehen

Browser verarbeiten SRI, indem sie Folgendes tun:

1. Wenn ein Browser ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut trifft, muss er, bevor er das Script ausführt oder bevor er ein durch das {{HTMLElement("link")}}-Element spezifiziertes Stylesheet anwendet, zuerst das Script oder Stylesheet mit dem erwarteten Hash vergleichen, der im `integrity`-Wert angegeben wird.

   Für die Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem des eingebetteten Dokuments bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, diese mit dem anfordernden Ursprung zu teilen.

2. Wenn das Script oder Stylesheet nicht mit dem zugehörigen `integrity`-Wert übereinstimmt, muss der Browser sich weigern, das Script auszuführen oder das Stylesheet anzuwenden und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Scripts oder Stylesheets fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [Ein CDN, das Sie nicht per XSS angreifen kann: Verwendung von Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
