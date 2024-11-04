---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: 8df009472bbc7f0fc8a69717e1493de02982ed66
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht, zu überprüfen, ob die von ihnen abgerufenen Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Manipulation geliefert werden. Dies funktioniert, indem Sie einen kryptografischen Hash bereitstellen, mit dem eine abgerufene Ressource übereinstimmen muss.

> [!NOTE]
> Bei der Überprüfung der Subresource-Integrity einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, prüfen die Browser zusätzlich die Ressource mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, zulässt, dass sie mit dem anfragenden Ursprung geteilt wird.

## Wie Subresource Integrity hilft

Websites entscheiden sich manchmal, auf einen Drittanbieter wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu setzen, um einige ihrer Ressourcen zu hosten, anstatt alle Ressourcen selbst zu hosten. Zum Beispiel könnte ein Dokument, das von `https://example.com` bereitgestellt wird, eine Ressource von einem anderen Ort einbinden:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt das Risiko, dass, wenn ein Angreifer die Kontrolle über den Drittanbieter erhält, dieser beliebige bösartige Inhalte in seine Dateien injizieren (oder die Dateien vollständig ersetzen) kann und somit auch potenziell Websites angreifen kann, die Dateien von ihm abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken solcher Angriffe zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien injiziert hat, geliefert wurden — und ohne dass irgendeine andere Art von Änderungen an diesen Dateien vorgenommen wurde.

## Nutzung von Subresource Integrity

Sie nutzen die Subresource Integrity-Funktion, indem Sie einen Base64-verschlüsselten kryptografischen Hash einer Ressource (Datei), die Sie dem Browser zum Abrufen anweisen, im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angeben.

Ein `integrity`-Wert beginnt mit mindestens einem Zeichenfolgenabschnitt, wobei jeder Abschnitt ein Präfix enthält, das auf einen bestimmten Hash-Algorithmus hinweist (derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich und dem tatsächlichen Base64-kodierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel für einen `integrity`-String mit base64-kodiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

So ist `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` der "Hash"-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Werts ist streng genommen ein **_kryptografischer_ _Digest_**, der durch Anwenden einer bestimmten Hash-Funktion auf einen Eingabewert gebildet wird (zum Beispiel eine Skript- oder Stylesheet-Datei). Es ist jedoch üblich, die Kurzform "Hash" zu verwenden, um _kryptografischen_ _Digest_ zu bedeuten, weshalb dies in diesem Artikel verwendet wird.

### Tools zur Generierung von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Tool, das Sie zur Generierung von SRI-Hashes verwenden können.

#### Verwendung von OpenSSL

Sie können SRI-Hashes aus der Befehlszeile mit **OpenSSL** generieren, indem Sie einen Befehl wie folgt ausführen:

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

Zur Nutzung dieses Codes:

1. Speichern Sie diesen Code in einer Datei namens `sri-hash.bat` im "SendTo"-Ordner Ihrer Windows-Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an…** und dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfeld.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfeld zu schließen.

> [!NOTE]
> Falls OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projektwebsite](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine Binärdistributionen von OpenSSL, pflegt jedoch eine informelle Liste von Drittanbieterdistributionen: https://wiki.openssl.org/index.php/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) generieren, indem Sie einen Befehl wie folgt ausführen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der `xxd`-Schritt durch die Pipeline konvertiert die hexadezimale Ausgabe von `shasum` in Binärdaten.
- Der `awk`-Schritt durch die Pipeline ist erforderlich, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` übergeben würde. Dies könnte katastrophale Folgen haben, wenn der Dateiname zufällig gültige Hex-Zeichen enthält — weil `xxd` diese ebenfalls dekodieren und an `base64` übergeben würde.

### Cross-Origin Resource Sharing und Subresource Integrity

Bei der Überprüfung der Subresource-Integrity einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, prüfen die Browser zusätzlich die Ressource mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, zulässt, dass sie mit dem anfragenden Ursprung geteilt wird. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)-Header bereitgestellt werden, der es erlaubt, dass die Ressource mit dem anfragenden Ursprung geteilt wird; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Beispiele

In den folgenden Beispielen wird angenommen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als der erwartete SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist, und dass eine Kopie des Skripts unter `https://example.com/example-framework.js` gehostet wird.

### Subresource Integrity mit dem \<script>-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er vor der Ausführung des Skripts `https://example.com/example-framework.js` das Skript zunächst mit dem erwarteten Hash vergleichen und verifizieren muss, dass eine Übereinstimmung besteht.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Weitere Details zum Zweck des `crossorigin`-Attributs finden Sie unter [CORS settings attributes](/de/docs/Web/HTML/Attributes/crossorigin).

## Wie Browser Subresource Integrity handhaben

Browser gehen mit SRI wie folgt um:

1. Wenn ein Browser auf ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut stößt, muss er, bevor er das Skript ausführt oder ein von dem {{HTMLElement("link")}}-Element angegebenes Stylesheet anwendet, zuerst das Skript oder Stylesheet mit dem erwarteten Hash im `integrity`-Wert vergleichen.

   Bei der Überprüfung der Subresource-Integrity einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, prüfen die Browser zusätzlich die Ressource mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, zulässt, dass sie mit dem anfragenden Ursprung geteilt wird.

2. Wenn das Skript oder Stylesheet nicht mit seinem zugeordneten `integrity`-Wert übereinstimmt, muss der Browser sich weigern, das Skript auszuführen oder das Stylesheet anzuwenden und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
