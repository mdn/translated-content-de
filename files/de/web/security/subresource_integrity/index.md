---
title: Subresource-Integrität
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Subresource-Integrität** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht zu überprüfen, ob die abgerufenen Ressourcen (zum Beispiel von einem [CDN](/de/docs/Glossary/CDN)) ohne unerwartete Manipulation geliefert werden. Sie funktioniert, indem Sie einen kryptografischen Hash angeben, den die abgerufene Ressource erfüllen muss.

> [!NOTE]
> Bei der Subresource-Integritätsüberprüfung einer Ressource, die von einem anderen Ursprung als dem Dokument, in dem sie eingebettet ist, bereitgestellt wird, überprüfen Browser die Ressource zusätzlich mithilfe von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, erlaubt, dass sie mit dem anfragenden Ursprung geteilt wird.

## Wie Subresource-Integrität hilft

Die Verwendung von {{Glossary("CDN", "Content Delivery Networks (CDNs)")}}, um Dateien wie Skripte und Stylesheets, die von mehreren Websites gemeinsam genutzt werden, zu hosten, kann die Leistung der Website verbessern und Bandbreite sparen. Allerdings geht die Nutzung von CDNs auch mit einem Risiko einher: Wenn ein Angreifer die Kontrolle über ein CDN erlangt, kann er beliebige bösartige Inhalte in die Dateien auf dem CDN einschleusen (oder die Dateien vollständig ersetzen) und somit potenziell alle Websites angreifen, die Dateien von diesem CDN abrufen.

Subresource-Integrität ermöglicht es Ihnen, einige Risiken solcher Angriffe zu mindern, indem Sie sicherstellen, dass die Dateien, die Ihre Webanwendung oder das Webdokument abruft (von einem CDN oder anderswo), ohne jegliche Einspeisung zusätzlicher Inhalte durch Dritte und ohne jegliche Art von Änderungen geliefert wurden.

## Verwendung von Subresource-Integrität

Sie nutzen die Subresource-Integritätsfunktion, indem Sie einen Base64-kodierten kryptografischen Hash einer Ressource (Datei), die Sie dem Browser zum Abrufen anweisen, angeben, indem Sie ihn im Wert des `integrity`-Attributs eines {{HTMLElement("script")}}-Elements oder eines {{HTMLElement("link")}}-Elements mit [`rel="stylesheet"`](/de/docs/Web/HTML/Attributes/rel#stylesheet), [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) verwenden.

Ein `integrity`-Wert beginnt mit mindestens einer Zeichenfolge, wobei jede Zeichenfolge ein Präfix enthält, das einen bestimmten Hash-Algorithmus anzeigt (derzeit sind `sha256`, `sha384` und `sha512` die erlaubten Präfixe), gefolgt von einem Bindestrich und endend mit dem eigentlichen Base64-kodierten Hash.

> [!NOTE]
> Ein **integrity**-Wert kann mehrere durch Leerzeichen getrennte Hashes enthalten. Eine Ressource wird geladen, wenn sie mit einem dieser Hashes übereinstimmt.

Beispiel eines `integrity`-Wertes mit Base64-kodiertem sha384-Hash:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Dabei ist `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` der "Hash"-Teil, und das Präfix `sha384` zeigt an, dass es sich um einen sha384-Hash handelt.

> [!NOTE]
> Der "Hash"-Teil eines `integrity`-Wertes ist, genau genommen, ein **_kryptografischer_ _Digest_**, der durch Anwenden einer bestimmten Hash-Funktion auf eine Eingabe (zum Beispiel eine Skript- oder Stylesheet-Datei) erstellt wird. Aber es ist üblich, die Abkürzung "Hash" für _kryptografischer_ _Digest_ zu verwenden, daher wird dieser Ausdruck in diesem Artikel verwendet.

### Tools zur Erstellung von SRI-Hashes

#### SRI-Hash-Generator

Der [SRI-Hash-Generator](https://www.srihash.org/) ist ein Online-Tool, das Sie verwenden können, um SRI-Hashes zu generieren.

#### Verwendung von OpenSSL

Sie können SRI-Hashes über die Kommandozeile mit **OpenSSL** generieren, indem Sie einen Befehl wie folgt ausführen:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In einer Windows-Umgebung können Sie ein Tool zur Erstellung von SRI-Hashes mit folgendem Code erstellen:

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

1. Speichern Sie diesen Code in einer Datei namens `sri-hash.bat` im SendTo-Ordner Ihres Windows-Systems (zum Beispiel `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Klicken Sie mit der rechten Maustaste auf eine Datei im Datei-Explorer, wählen Sie **Senden an...**, und wählen Sie dann `sri-hash`. Sie sehen den Integritätswert in einem Befehlsfenster.
3. Wählen Sie den Integritätswert aus und klicken Sie mit der rechten Maustaste, um ihn in die Zwischenablage zu kopieren.
4. Drücken Sie eine beliebige Taste, um das Befehlsfenster zu schließen.

> [!NOTE]
> Wenn OpenSSL nicht auf Ihrem System installiert ist, besuchen Sie die [OpenSSL-Projektwebseite](https://www.openssl.org/) für Informationen zum Herunterladen und Installieren. Das OpenSSL-Projekt hostet selbst keine Binärverteilungen von OpenSSL, pflegt jedoch eine informelle Liste von Drittanbieter-Distributionen: https://wiki.openssl.org/index.php/Binaries.

#### Verwendung von shasum

Sie können SRI-Hashes mit [**shasum**](https://linux.die.net/man/1/shasum) erstellen, indem Sie einen Befehl wie folgt ausführen:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Der `xxd`-Schritt konvertiert die hexadezimale Ausgabe von `shasum` in Binärdaten.
- Der `awk`-Schritt ist notwendig, weil `shasum` den gehashten Dateinamen in seiner Ausgabe an `xxd` übergibt. Dies kann katastrophale Folgen haben, wenn der Dateiname gültige Hex-Zeichen enthält — denn `xxd` dekodiert das ebenfalls und leitet es an `base64` weiter.

### Cross-Origin Resource Sharing und Subresource-Integrität

Zur Überprüfung der Subresource-Integrität einer Ressource, die von einem anderen Ursprung bereitgestellt wird als das Dokument, in dem sie eingebettet ist, überprüfen Browser die Ressource zusätzlich mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, erlaubt, sie mit dem anfragenden Ursprung zu teilen. Daher muss die Ressource mit einem [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) Header bereitgestellt werden, der die Ressource erlaubt, mit dem anfragenden Ursprung geteilt zu werden; zum Beispiel:

```http
Access-Control-Allow-Origin: *
```

## Beispiele

In den folgenden Beispielen nehmen wir an, dass `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` bereits als der erwartete SHA-384-Hash (Digest) eines bestimmten Skripts `example-framework.js` bekannt ist und dass eine Kopie des Skripts unter `https://example.com/example-framework.js` gehostet wird.

### Subresource-Integrität mit dem \<script>-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er vor der Ausführung des Skripts `https://example.com/example-framework.js` das Skript mit dem erwarteten Hash vergleichen und überprüfen muss, ob es übereinstimmt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Für weitere Details zum Zweck des `crossorigin`-Attributs siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

## Wie Browser mit Subresource-Integrität umgehen

Browser behandeln SRI, indem sie Folgendes tun:

1. Wenn ein Browser auf ein {{HTMLElement("script")}}- oder {{HTMLElement("link")}}-Element mit einem `integrity`-Attribut trifft, muss er, bevor das Skript ausgeführt oder ein vom {{HTMLElement("link")}}-Element angegebenes Stylesheet angewendet wird, das Skript oder Stylesheet zuerst mit dem im `integrity`-Wert angegebenen erwarteten Hash vergleichen.

   Zur Überprüfung der Subresource-Integrität einer Ressource, die von einem anderen Ursprung bereitgestellt wird als das Dokument, in dem sie eingebettet ist, überprüfen Browser die Ressource zusätzlich mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS), um sicherzustellen, dass der Ursprung, der die Ressource bereitstellt, erlaubt, sie mit dem anfragenden Ursprung zu teilen.

2. Wenn das Skript oder Stylesheet nicht mit seinem zugeordneten `integrity`-Wert übereinstimmt, muss der Browser sich weigern, das Skript auszuführen oder das Stylesheet anzuwenden, und stattdessen einen Netzwerkfehler zurückgeben, der anzeigt, dass das Abrufen dieses Skripts oder Stylesheets fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- Der {{httpheader("Content-Security-Policy")}} HTTP-Header.
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
