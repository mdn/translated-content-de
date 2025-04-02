---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Subresource Integrity** (SRI) ist ein Sicherheitsmerkmal, das es Browsern ermöglicht zu überprüfen, ob die Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulationen geliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, den eine abgerufene Ressource erfüllen muss.

> [!NOTE]
> Bei der Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, überprüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfordernden Ursprung zu teilen.

## Wie Subresource Integrity hilft

Websites entscheiden sich manchmal dafür, auf einen Drittanbieter wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zurückzugreifen, um einige ihrer Ressourcen zu hosten, anstatt alle Ressourcen selbst zu hosten. Ein Beispiel könnte ein Dokument sein, das von `https://example.com` bereitgestellt wird und eine Ressource von einem anderen Ort einbindet:

```html
<script src="https://not-example.com/script.js"></script>
```

Das bringt ein Risiko mit sich: wenn ein Angreifer die Kontrolle über den Drittanbieter-Host gewinnt, kann dieser beliebigen schädlichen Inhalt in dessen Dateien injizieren (oder die Dateien komplett ersetzen) und somit potenziell die Sites angreifen, die Dateien von dort abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken solcher Angriffe abzumildern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien injiziert hat, und ohne dass irgendwelche anderen Änderungen an diesen Dateien vorgenommen wurden, geliefert wurden.

## Verwendung von Subresource Integrity

Sie verwenden die Subresource Integrity-Funktion, indem Sie einen base64-kodierten kryptografischen Hash einer Ressource (Datei) im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angeben.

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das auf einen bestimmten Hash-Algorithmus hinweist (derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich, und endet mit dem tatsächlichen base64-kodierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel-`integrity`-String mit base64-kodiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Der "Hash"-Teil ist `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC`, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Wertes ist streng genommen ein **_kryptografischer_ _Digest_**, der durch die Anwendung einer bestimmten Hash-Funktion auf eine Eingabe (z. B. eine Skript- oder Stylesheet-Datei) gebildet wird. Es ist jedoch üblich, den Begriff "Hash" als Abkürzung für _kryptografischer_ _Digest_ zu verwenden, deshalb wird in diesem Artikel dieser Begriff verwendet.

### Werkzeuge zur Generierung von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Werkzeug zur Generierung von SRI-Hashes.

#### Verwendung von OpenSSL

Sie können SRI-Hashes von der Kommandozeile aus mit **OpenSSL** erzeugen, indem Sie einen Befehl wie folgt aufrufen:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Werkzeug zur Generierung von SRI-Hashes mit dem folgenden Code erstellen:

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

1. Speichern Sie den Code in einer Datei mit dem Namen `sri-hash.bat` im Windows SendTo-Ordner Ihrer Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an...** und dann `sri-hash`. Sie sehen den Integritätswert in einem Kommando-Fenster.
3. Wählen Sie den Integritätswert und kopieren Sie ihn per Rechtsklick in die Zwischenablage.
4. Drücken Sie eine beliebige Taste, um das Kommando-Fenster zu schließen.

> [!NOTE]
> Wenn OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projekt-Website](https://www.openssl.org/), um Informationen zum Herunterladen und Installieren zu erhalten. Das OpenSSL-Projekt hostet keine Binärdistributionen von OpenSSL, führt jedoch eine informelle Liste von Drittanbieterverteilungen: https://github.com/openssl/openssl/wiki/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) erzeugen, indem Sie einen Befehl wie folgt aufrufen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der durchlaufende `xxd`-Schritt nimmt die hexadezimale Ausgabe von `shasum` und konvertiert sie in binär.
- Der durchlaufende `awk`-Schritt ist notwendig, da `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` weitergibt. Dies kann verheerende Folgen haben, wenn der Dateiname gültige Hex-Zeichen enthält — denn `xxd` würde das ebenfalls dekodieren und an `base64` weitergeben.

### Cross-Origin Resource Sharing und Subresource Integrity

Bei der Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, überprüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfordernden Ursprung zu teilen. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header, der das Teilen der Ressource mit dem anfordernden Ursprung erlaubt, bereitgestellt werden; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Beispiele

In den folgenden Beispielen wird angenommen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als der erwartete SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und eine Kopie des Skripts unter `https://example.com/example-framework.js` gehostet wird.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er vor der Ausführung des Skripts `https://example.com/example-framework.js` das Skript mit dem erwarteten Hash vergleichen und überprüfen muss, ob eine Übereinstimmung vorliegt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs lesen Sie [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

## Wie Browser mit Subresource Integrity umgehen

Browser gehen mit SRI wie folgt um:

1. Wenn ein Browser auf ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut stößt, muss der Browser vor der Ausführung des Skripts oder vor der Anwendung eines durch das {{HTMLElement("link")}}-Element angegebenen Stylesheets erst das Skript oder Stylesheet mit dem im `integrity`-Wert angegebenen erwarteten Hash vergleichen.

   Bei der Subresource-Integrity-Überprüfung einer Ressource, die von einem anderen Ursprung als dem eingebetteten Dokument bereitgestellt wird, überprüfen Browser zusätzlich die Ressource mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, es erlaubt, sie mit dem anfordernden Ursprung zu teilen.

2. Wenn das Skript oder Stylesheet nicht mit seinem zugeordneten `integrity`-Wert übereinstimmt, muss der Browser sich weigern, das Skript auszuführen oder das Stylesheet anzuwenden und stattdessen einen Netzfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [Ein CDN, das Sie nicht XSSen kann: Verwendung von Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
