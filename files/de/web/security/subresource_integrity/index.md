---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht, sicherzustellen, dass die von ihnen geladenen Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Manipulationen geliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash angeben, den eine geladene Ressource erfüllen muss.

> [!NOTE]
> Bei der Überprüfung der Subresource-Integrität einer Ressource, die von einem anderen Ursprung als dem Dokument geliefert wird, in das sie eingebettet ist, überprüfen Browser die Ressource zusätzlich mithilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource liefert, deren Freigabe für den anfragenden Ursprung erlaubt.

## Wie Subresource Integrity hilft

Webseiten entscheiden sich manchmal dafür, sich auf Dritte wie ein {{Glossary("CDN", "Content Delivery Network (CDN)")}} zu verlassen, um einige ihrer Ressourcen zu hosten, anstatt alle Ressourcen selbst zu hosten. Ein Dokument, das zum Beispiel von `https://example.com` bereitgestellt wird, könnte eine Ressource von einem anderen Standort einbinden:

```html
<script src="https://not-example.com/script.js"></script>
```

Dies birgt ein Risiko, denn wenn ein Angreifer die Kontrolle über den Drittanbieter-Host erlangt, kann dieser beliebigen bösartigen Inhalt in seine Dateien einfügen (oder die Dateien komplett ersetzen) und somit potenziell auch Seiten angreifen, die Dateien von ihm abrufen.

Subresource Integrity ermöglicht es Ihnen, einige Risiken solcher Angriffe zu mindern, indem sichergestellt wird, dass die Dateien, die Ihre Webanwendung oder Ihr Webdokument abruft, ohne dass ein Angreifer zusätzlichen Inhalt in diese Dateien eingefügt hat — und ohne dass irgendwelche anderen Änderungen an diesen Dateien vorgenommen wurden — geliefert wurden.

## Verwendung der Subresource Integrity

Sie nutzen die Subresource Integrity-Funktion, indem Sie einen Base64-kodierten kryptografischen Hash einer Ressource (Datei), die Sie dem Browser zum Abruf anweisen, in den Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angeben.

Ein `integrity`-Wert beginnt mit mindestens einem String, wobei jeder String ein Präfix enthält, das einen bestimmten Hash-Algorithmus angibt (derzeit sind die erlaubten Präfixe `sha256`, `sha384` und `sha512`), gefolgt von einem Bindestrich und endend mit dem eigentlichen base64-kodierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel einer `integrity`-Zeichenkette mit base64-kodiertem SHA-384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

`oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` ist also der „Hash“-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen SHA-384-Hash handelt.

> [!NOTE]
> Der „Hash“-Teil eines `integrity`-Werts ist streng genommen ein **_kryptografischer_ _Digest_**, der durch die Anwendung einer bestimmten Hash-Funktion auf eine Eingabe (z. B. eine Skript- oder Stylesheet-Datei) gebildet wird. Es ist jedoch üblich, die Abkürzung „Hash“ zu verwenden, um _kryptografischer_ _Digest_ zu meinen, und das wird in diesem Artikel verwendet.

### Tools zum Generieren von SRI-Hashes

#### SRI Hash Generator

Der [SRI Hash Generator](https://www.srihash.org/) ist ein Online-Tool, mit dem Sie SRI-Hashes generieren können.

#### Verwendung von OpenSSL

Sie können SRI-Hashes von der Kommandozeile aus mit **OpenSSL** generieren, indem Sie einen Befehl wie diesen ausführen:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie mit dem folgenden Code ein Tool zum Generieren von SRI-Hashes erstellen:

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

1. Speichern Sie diesen Code in einer Datei mit dem Namen `sri-hash.bat` im Windows "SendTo"-Ordner in Ihrer Umgebung (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an...** und dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfenster.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Wenn OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projektwebsite](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine Binärdistributionen von OpenSSL, führt jedoch eine informelle Liste von Drittanbieterdistributionen: https://github.com/openssl/openssl/wiki/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) generieren, indem Sie einen Befehl wie diesen ausführen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der "pipe-through" `xxd`-Schritt konvertiert die hexadezimale Ausgabe von `shasum` in Binärdaten.
- Der "pipe-through" `awk`-Schritt ist notwendig, weil `shasum` den gehashte Dateinamen in seiner Ausgabe an `xxd` weitergeben wird. Das kann katastrophale Folgen haben, wenn der Dateiname zufällig gültige Hex-Zeichen enthält — denn `xxd` würde dies ebenfalls dekodieren und an `base64` weitergeben.

### Cross-Origin Resource Sharing und Subresource Integrity

Für die Überprüfung der Subresource-Integrität einer Ressource, die von einem anderen Ursprung als dem Dokument, in das sie eingebettet ist, bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, deren Freigabe für den anfragenden Ursprung gestattet. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header geliefert werden, der die Freigabe der Ressource für den anfragenden Ursprung erlaubt; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Beispiele

In den folgenden Beispielen wird angenommen, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als der erwartete SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und dass es eine Kopie des Skripts unter `https://example.com/example-framework.js` gibt.

### Subresource Integrity mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er das Skript `https://example.com/example-framework.js` nicht ausführen darf, bevor er es nicht mit dem erwarteten Hash verglichen und eine Übereinstimmung festgestellt hat.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Weitere Einzelheiten zum Zweck des `crossorigin`-Attributs finden Sie unter [CORS-Einstellungen von Attributen](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

## Wie Browser mit Subresource Integrity umgehen

Browser gehen mit SRI folgendermaßen um:

1. Wenn ein Browser ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut trifft, muss er, bevor er das Skript ausführt oder bevor er ein vom {{HTMLElement("link")}}-Element angegebenes Stylesheet anwendet, das Skript oder das Stylesheet zuerst mit dem erwarteten Hash im `integrity`-Wert vergleichen.

   Bei der Überprüfung der Subresource-Integrität einer Ressource, die von einem anderen Ursprung als dem Dokument, in das sie eingebettet ist, bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), um sicherzustellen, dass der Ursprung, der die Ressource liefert, deren Freigabe für den anfragenden Ursprung erlaubt.

2. Wenn das Skript oder das Stylesheet nicht mit dem zugehörigen `integrity`-Wert übereinstimmt, muss der Browser die Ausführung des Skripts ablehnen oder die Anwendung des Stylesheets verweigern und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [Ein CDN, das kein XSS kann: Verwendung von Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
