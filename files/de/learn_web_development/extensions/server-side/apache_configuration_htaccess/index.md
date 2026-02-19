---
title: "Apache-Konfiguration: .htaccess"
short-title: Apache .htaccess
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: 09adb3822217b326f2518720af49abbf97af6108
---

Apache `.htaccess`-Dateien ermöglichen es Benutzern, Verzeichnisse des von ihnen kontrollierten Webservers zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugang zur Hauptserver-Konfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache HTTPD-Dokumentationsseite für weitere Details darüber, was `.htaccess`-Dateien tun können.

Der Rest dieses Dokuments behandelt verschiedene Konfigurationsoptionen, die Sie zu `.htaccess` hinzufügen können und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen innerhalb des Blocks nur dann auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert wurde und der Server es geladen hat. Auf diese Weise schützen wir unseren Server vor einem Absturz, falls das Modul nicht geladen wurde.

## Weiterleitungen

Es gibt Zeiten, in denen wir Benutzern mitteilen müssen, dass eine Ressource entweder temporär oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

```apacheconf
<IfModule mod_alias.c>
  # Redirect to a URL on a different host
  Redirect "/service" "http://foo2.example.com/service"

  # Redirect to a URL on the same host
  Redirect "/one" "/two"

  # Equivalent redirect to URL on the same host
  Redirect temp "/one" "/two"

  # Permanent redirect to a URL on the same host
  Redirect permanent "/three" "/four"

  # Redirect to an external URL
  # Using regular expressions and RedirectMatch
  RedirectMatch "^/oldfile\.html/?$" "http://example.com/newfile.php"
</IfModule>
```

Die möglichen Werte für den ersten Parameter sind unten aufgelistet. Wenn der erste Parameter nicht enthalten ist, lautet er standardmäßig `temp`.

- permanent
  - : Gibt einen permanenten Weiterleitungsstatus (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Weiterleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other" Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone" Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Ressourcen aus anderen Quellen

Der erste Satz von Direktiven kontrolliert den Zugriff auf Ressourcen des Servers durch [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing). CORS ist ein mechanismus-basiertes http-header. Es ermöglicht einem Server, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen erlauben soll.

Aus Sicherheitsgründen beschränken Browser HTTP-Anfragen über mehrere Ursprünge, die von Skripten initiiert werden. Zum Beispiel befolgen XMLHttpRequest und die Fetch API die Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von demselben Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Webseite hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Wenn Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines untergeordneten Verzeichnisses überschreiben, wird jede Anfrage von externen Servern gewährt, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative ist, ausdrücklich anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Seite haben. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigt haben.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium-Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Ermöglichen der Nutzung von CORS-Bildern und -Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann dies zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit solcher Angriffe zu mindern, sollten Sie das `crossorigin`-Attribut in den angeforderten Bildern und das folgende Code-Snippet in Ihrer `.htaccess` verwenden, um den CORS-Header vom Server festzulegen.

```apacheconf
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(bmp|cur|gif|ico|jpe?g|a?png|svgz?|webp|heic|heif|avif)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=*IS_CORS*
    </FilesMatch>
  </IfModule>
</IfModule>
```

Der [Google Fonts-Behandlungsleitfaden](https://developers.google.com/fonts/docs/troubleshooting) von Google Chrome sagt uns, dass, während Google Fonts den CORS-Header mit jeder Antwort sendet, einige Proxys ihn möglicherweise entfernen, bevor der Browser ihn zur Darstellung der Schriftart verwenden kann.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Ressourcen-Timing über mehrere Ursprünge

Die [Resource Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf vollständige Timing-Informationen für Ressourcen in einem Dokument zuzugreifen.

Der [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwortheader gibt Ursprünge an, die sehen dürfen, welche Werte von Attributen über Funktionen der Resource Timing API abgerufen wurden, die ansonsten aufgrund von Einschränkungen in Bezug auf Cross-Origin als null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header den Ursprung nach Ausführung der Anfrage nicht einschließt, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Anpassbare Fehlerseiten/Nachrichten

Apache erlaubt es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, je nachdem, welchen Fehlertyp sie erhalten.

Die Fehlerseiten werden als URLs angezeigt. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) oder als vollständige URL beginnen, die vom Client aufgelöst werden kann.

Siehe die [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationsseite für weitere Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie `MultiViews` für das Verzeichnis funktioniert, auf das sich die Konfiguration bezieht.

Die Wirkung von `MultiViews` ist wie folgt: Empfängt der Server eine Anfrage für /some/dir/foo, wenn in /some/dir `MultiViews` aktiviert ist und /some/dir/foo existiert nicht, dann liest der Server das Verzeichnis nach Dateien mit dem Namen foo.\* und erstellt faktisch eine Typenmap, die all diese Dateien benennt und ihnen die gleichen Medientypen und Inhaltscodierungen zuweist, als hätte der Client eine davon namentlich angefordert. Dann wird das beste Übereinkommen mit den Anforderungen des Clients gewählt.

Diese Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das sich diese Konfiguration bezieht, und verhindert, dass Apache einen 404-Fehler durch eine Neuschreibung zurückgibt, wenn das Verzeichnis mit dem gleichen Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten für den für eine HTTP-Antwort ausgewählten Inhalt zuzuweisen, indem es Muster in der URI oder den Dateinamen den Metadatenwerten zuordnet.

Zum Beispiel definieren die Dateierweiterungen von Inhaltsdateien oft den Internetmedientyp, die Sprache, den Zeichensatz und die Inhaltscodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und bei Inhaltsaushandlungen verwendet, wenn Alternativen ausgewählt werden, sodass die Präferenzen des Benutzers respektiert werden, wenn eine von mehreren möglichen Inhalten bereitgestellt wird.

**Das Ändern der Metadaten für eine Datei ändert nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien möglicherweise weiterhin von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Codierung) ändern, müssen Sie die betroffenen Dateien möglicherweise "berühren" (das Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen (alias MIME-Typen) bereitstellen

Verknüpft Medientypen mit einer oder mehreren Erweiterungen, um sicherzustellen, dass die Ressourcen entsprechend bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben.

```apacheconf
<IfModule mod_mime.c>
  # Data interchange
    AddType application/atom+xml      atom
    AddType application/json          json map topojson
    AddType application/ld+json       jsonld
    AddType application/rss+xml       rss
    AddType application/geo+json      geojson
    AddType application/rdf+xml       rdf
    AddType application/xml           xml
  # JavaScript
    AddType text/javascript           js mjs
  # Manifest files
    AddType application/manifest+json     webmanifest
    AddType application/x-web-app-manifest+json         webapp
    AddType text/cache-manifest           appcache
  # Media files
    AddType audio/mp4                     f4a f4b m4a
    AddType audio/ogg                     oga ogg opus
    AddType image/bmp                     bmp
    AddType image/svg+xml                 svg svgz
    AddType image/webp                    webp
    AddType video/mp4                     f4v f4p m4v mp4
    AddType video/ogg                     ogv
    AddType video/webm                    webm
    AddType image/x-icon    cur ico
  # HEIF Images
    AddType image/heic                    heic
    AddType image/heif                    heif
  # HEIF Image Sequence
    AddType image/heics                   heics
    AddType image/heifs                   heifs
  # AVIF Images
    AddType image/avif                    avif
  # AVIF Image Sequence
    AddType image/avis                    avis
  # WebAssembly
    AddType application/wasm              wasm
  # Web fonts
    AddType font/woff                         woff
    AddType font/woff2                        woff2
    AddType application/vnd.ms-fontobject                eot
    AddType font/ttf                          ttf
    AddType font/collection                   ttc
    AddType font/otf                          otf
  # Other
    AddType application/octet-stream          safariextz
    AddType application/x-bb-appworld         bbaw
    AddType application/x-chrome-extension    crx
    AddType application/x-opera-extension     oex
    AddType application/x-xpinstall           xpi
    AddType text/calendar                     ics
    AddType text/markdown                     markdown md
    AddType text/vcard                        vcard vcf
    AddType text/vnd.rim.location.xloc        xloc
    AddType text/vtt                          vtt
    AddType text/x-component                  htc
</IfModule>
```

## Setzen des Standard-Charset-Attributs

Jede Ressource im Web hat einen Zeichensatz. Die meisten, wenn nicht alle, Inhalte sind UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen, die als `text/html` oder `text/plain` gekennzeichnet sind, mit dem Zeichensatz `UTF-8` zu bedienen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Setzen Sie den Zeichensatz für bestimmte Medientypen

Legen Sie den `charset`-Parameter für die folgenden Dateitypen auf `UTF-8` fest, indem Sie die [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive verwenden, die in `mod_mime` verfügbar ist.

```apacheconf
<IfModule mod_mime.c>
  AddCharset utf-8 .appcache \
    .bbaw \
    .css \
    .htc \
    .ics \
    .js \
    .json \
    .manifest \
    .map \
    .markdown \
    .md \
    .mjs \
    .topojson \
    .vtt \
    .vcard \
    .vcf \
    .webmanifest \
    .xloc
</IfModule>
```

## `Mod_rewrite`- und `RewriteEngine`-Direktiven

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu ändern. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur auf beliebige Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl von angehängten Regelbedingungen für jede Regel, um einen sehr flexiblen und leistungsstarken Mechanismus zur URL-Manipulation zu bieten. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Anpassung zu erreichen.

### Aktivieren von `mod_rewrite`

Das grundlegende Muster zum Aktivieren von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Aktivieren Sie die Rewrite-Engine (das ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation beschrieben.
2. Aktivieren Sie die `FollowSymLinks`-Option, wenn sie nicht bereits aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation.
3. Wenn Ihr Webhost die `FollowSymlinks`-Option nicht erlaubt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` einkommentieren, aber beachten Sie den [Leistungseinfluss](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks).
   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` setzen.
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase).
   - Abhängig von der Konfiguration Ihres Servers müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  Options +FollowSymlinks
  # Options +SymLinksIfOwnerMatch
  # RewriteBase /
  # RewriteOptions <options>
</IfModule>
```

### Erzwingen von HTTPS

Diese Rewrite-Regeln leiten von der unsicheren Version `http://` zur sicheren Version `https://` der URL weiter, wie im [Apache HTTPD Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt Webroot-Methode zur Erstellung Ihrer TLS-Zertifikate verwenden, wird die Zertifikatsprüfung fehlschlagen, wenn Validierungsanfragen zu HTTPS weitergeleitet werden. Aktivieren Sie die benötigten Bedingung(en).

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteCond %{REQUEST_URI} !^/\.well-known/acme-challenge/
  RewriteCond %{REQUEST_URI} !^/\.well-known/cpanel-dcv/[\w-]+$
  RewriteCond %{REQUEST_URI} !^/\.well-known/pki-validation/[A-F0-9]{32}\.txt(?:\ Comodo\ DCV)?$
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
```

### Umleitung von `www.`-URLs

Diese Direktiven leiten `www.example.com` zu `example.com` um.

Sie sollten keine Inhalte an mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann zu SEO-Problemen (doppelter Inhalt) führen, daher sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [Canonical-URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL von Suchmaschinen durchsucht werden soll (falls sie die Funktion unterstützen).

Setzen Sie die Variable `%{ENV:PROTO}`, um Umschreibungen zu ermöglichen, die automatisch mit dem entsprechenden Schema (`http` oder `https`) umleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} =on
  RewriteRule ^ - [E=PROTO:https]
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ - [E=PROTO:http]

  RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
  RewriteRule ^ %{ENV:PROTO}://%1%{REQUEST_URI} [R=301,L]
</IfModule>
```

### Einfügen von `www.` am Anfang von URLs

Diese Regeln fügen `www.` am Anfang einer URL hinzu. Es ist wichtig zu beachten, dass Sie niemals denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann zu SEO-Problemen (doppelter Inhalt) führen, daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [Canonical-URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL von Suchmaschinen durchsucht werden soll.

Setzen Sie die Variable `%{ENV:PROTO}`, um Umschreibungen zu ermöglichen, die automatisch mit dem entsprechenden Schema (`http` oder `https`) umleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat eine der während der Umleitung verwendeten Domains nicht verarbeiten kann, sollten Sie die Bedingung aktivieren.

Das folgende könnte keine gute Idee sein, wenn Sie "echte" Subdomains für bestimmte Teile Ihrer Website verwenden.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} =on
  RewriteRule ^ - [E=PROTO:https]
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ - [E=PROTO:http]

  RewriteCond %{HTTPS} !=on

  RewriteCond %{HTTP_HOST} !^www\. [NC]
  RewriteCond %{SERVER_ADDR} !=127.0.0.1
  RewriteCond %{SERVER_ADDR} !=::1
  RewriteRule ^ %{ENV:PROTO}://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
```

## Frame-Optionen

Das folgende Beispiel sendet den `X-Frame-Options`-Antwortheader mit dem Wert DENY, der den Browsern mitteilt, den Inhalt der Webseite nicht in einem Frame anzuzeigen, um die Website vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten mehr über [die beiden anderen möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) lesen: `SAMEORIGIN` und `ALLOW-FROM`.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass es sogar jegliche Rahmung Ihres Inhalts verbietet (z. B. wenn Benutzer Ihre Website über eine Google-Bildersuche besuchen).

Dennoch sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die eine benutzerverändernde Operation zulassen (z. B. Seiten, die Ein-Klick-Kauflinks enthalten, Checkout- oder Banküberweisungs-Bestätigungsseiten, Seiten, die permanente Konfigurationsänderungen ermöglichen, etc.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site-Scripting und anderen Inhaltsinjektionsangriffen durch Festlegen einer `Content Security Policy`, die nur vertrauenswürdige Inhaltsquellen für Ihre Website zulässt.

Es gibt keine Richtlinie, die für alle Websites passt, das folgende Beispiel dient als Leitfaden, den Sie für Ihre Seite anpassen können.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) nutzen, um sicherzustellen, dass Ihr Header das tut, was Sie möchten.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

Diese CSP:

1. Beschränkt standardmäßig alle Abrufe auf den Ursprung der aktuellen Website, indem die `default-src`-Direktive auf `'self'` gesetzt wird - was als Rückfalleinstellung für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}} fungiert.
   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven angeben müssen, die für Ihre Website gelten, zum Beispiel: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, etc.
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen, von welcher(n) Seite(n) Ihre Website Ressourcen laden darf. Andernfalls wird sie auf denselben Ursprung wie die Seite beschränkt, die die Anfrage stellt.

2. Verhindert das `<base>`-Element auf der Website. Dies soll verhindern, dass Angreifer die Standorte von aus relativen URLs geladenen Ressourcen ändern.
   - Wenn Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`.

3. Erlaubt Formularübermittlungen nur vom aktuellen Ursprung: `form-action 'self'`.
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten in, zum Beispiel, das `<iframe>`- oder `<object>`-Element einbetten, indem die `frame-ancestors 'none'`-Direktive gesetzt wird.
   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden und ist dem `X-Frame-Options`-Header ähnlich.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist.

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP bereitgestellt werden, so behandelt, als ob sie sicher über HTTPS geladen wurden, indem die `upgrade-insecure-requests`-Direktive gesetzt wird.
   - **`upgrade-insecure-requests` stellt nicht sicher, dass die Website selbst über HTTPS geladen wird. Wenn Sie erzwingen möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einschließen.**

6. Schließt den `Content-Security-Policy`-Header in alle Antworten ein, die in der Lage sind, Skripte auszuführen. Dazu gehören die häufig verwendeten Dateitypen: HTML, XML und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem "Browsing-Context" ausführen können, sind sie enthalten, um [Web-Worker](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) zu adressieren.

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei in welchem ​​Format auch immer haben, das der Server zu verwenden konfiguriert ist, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

Auf Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, von der Ansicht verborgen, jedoch nicht vom Zugriff, wenn Sie ihren Namen und Standort kennen. Diese Arten von Dateien enthalten normalerweise Benutzerpräferenzen oder den gespeicherten Zustand eines Dienstprogramms und können recht private Bereiche enthalten, wie beispielsweise die `.git`- oder `.svn`-Verzeichnisse.

Das Verzeichnis `.well-known/` repräsentiert [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfadpräfix für „bekannte Standorte“ (z. B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf dessen sichtbaren Inhalt nicht blockiert werden.

```apacheconf
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_URI} "!(^|/)\.well-known/([^./]+./?)+$" [NC]
    RewriteCond %{SCRIPT_FILENAME} -d [OR]
    RewriteCond %{SCRIPT_FILENAME} -f
    RewriteRule "(^|/)\." - [F]
</IfModule>
```

## Zugriff auf Dateien mit sensiblen Informationen blockieren

Blockieren Sie den Zugriff auf Sicherungs- und Quelldateien, die von einigen Texteditoren hinterlassen werden können und ein Sicherheitsrisiko darstellen können, wenn jeder Zugriff darauf hat.

Aktualisieren Sie den `<FilesMatch>`-regulären Ausdruck im folgenden Beispiel, um alle Dateien einzuschließen, die möglicherweise auf Ihrem Produktionsserver landen und möglicherweise sensible Informationen über Ihre Website offenlegen. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderen.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server ihn zur sicheren Version der Website weiterleitet, bleibt dennoch ein Zeitfenster (die anfängliche HTTP-Verbindung) für einen Angreifer offen, um die Anfrage herabzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS eine Verbindung zu Ihrem Server herstellt, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Seien Sie sich bewusst, dass Strict Transport Security nicht widerrufbar ist und Sie sicherstellen müssen, dass die Seite über HTTPS bereitgestellt werden kann, solange Sie es in der `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z. B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern Sie, dass einige Browser den Antwortinhalt sniffen

Einige ältere Browser versuchen, den Inhaltstyp einer Ressource zu erraten, selbst wenn er nicht ordnungsgemäß in der Serverkonfiguration eingerichtet ist. Dies reduziert die Exposition gegenüber Drive-by-Download-Angriffen und Cross-Origin-Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind, andere Ressourcen anzufordern (oder zu navigieren).

Dazu gehören gängige Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Arbeiter.

Um die Referrer-Leckage vollständig zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass die Auswirkung sich negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu prüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren Sie die `TRACE`-HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode, obwohl sie scheinbar harmlos ist, kann in einigen Szenarien erfolgreich verwendet werden, um die Anmeldeinformationen legitimer Benutzer zu stehlen. Siehe [Ein Cross-Site-Tracing (XST)-Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern jetzt TRACE-Anfragen, die über JavaScript gestellt werden, aber andere Möglichkeiten, TRACE-Anfragen mit Browsern zu senden, wurden entdeckt, wie z. B. die Verwendung von Java.

Wenn Sie Zugriff auf die Hauptserver-Konfigurationsdatei haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen Sie den `X-Powered-By`-Antwortheader

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z. B. ihren Namen, Versionsnummer).

Dieser Header bietet keinen Wert, und in einigen Fällen kann die darin enthaltene Information Schwachstellen offenlegen.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf Sprache/Bibliotheksebene deaktivieren (z. B.: für PHP können Sie dies tun, indem Sie die folgende Einstellung in `php.ini` vornehmen.

```ini
expose_php = off;
```

## Entfernen Sie die von Apache generierte Server-Informationsfußzeile

Verhindern Sie, dass Apache eine abschließende Fußzeile mit Informationen über den Server zu den vom Server generierten Dokumenten hinzufügt (z. B. Fehlermeldungen, Verzeichnislisten, etc.). Siehe die Dokumentation zur [`ServerSignature`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#serversignature) für weitere Informationen darüber, was die Serversignatur bereitstellt und die [`ServerTokens`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#servertokens) für Informationen darüber, wie die bereitgestellten Informationen in der Signatur konfiguriert werden können.

```apacheconf
ServerSignature Off
```

## Beheben von beschädigten `AcceptEncoding`-Headern

Einige Proxys und Sicherheitssoftware beschädigen oder entfernen den `Accept-Encoding`-HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine ausführlichere Erklärung.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_setenvif.c>
    <IfModule mod_headers.c>
      SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
      RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
    </IfModule>
  </IfModule>
</IfModule>
```

## Medientypen komprimieren

Komprimieren Sie alle Ausgaben, die einen der folgenden Medientypen enthalten, mithilfe der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_filter.c>
    AddOutputFilterByType DEFLATE "application/atom+xml" \
      "application/javascript" \
      "application/json" \
      "application/ld+json" \
      "application/manifest+json" \
      "application/rdf+xml" \
      "application/rss+xml" \
      "application/schema+json" \
      "application/geo+json" \
      "application/vnd.ms-fontobject" \
      "application/wasm" \
      "application/x-font-ttf" \
      "application/x-javascript" \
      "application/x-web-app-manifest+json" \
      "application/xhtml+xml" \
      "application/xml" \
      "font/eot" \
      "font/opentype" \
      "font/otf" \
      "font/ttf" \
      "image/bmp" \
      "image/svg+xml" \
      "image/vnd.microsoft.icon" \
      "text/cache-manifest" \
      "text/calendar" \
      "text/css" \
      "text/html" \
      "text/javascript" \
      "text/plain" \
      "text/markdown" \
      "text/vcard" \
      "text/vnd.rim.location.xloc" \
      "text/vtt" \
      "text/x-component" \
      "text/x-cross-domain-policy" \
      "text/xml"
  </IfModule>
</IfModule>
```

## Zuordnen von Erweiterungen zu Medientypen

Ordnen Sie die folgenden Dateierweiterungen dem angegebenen Codierungstyp mit [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bereitstellen kann (dies wird NICHT dazu führen, dass Apache sie komprimiert!). Wenn diese Dateitypen ohne einen entsprechenden `Content-Encoding`-Antwortheader bereitgestellt würden, würden Clientanwendungen (z. B. Browser) nicht wissen, dass sie die Antwort zuerst dekomprimieren müssten, und könnten den Inhalt daher nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Server-Ressourcen mit einem zukunftsweisenden Ablaufdatum mithilfe des [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Moduls und der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)- und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires)-Header.

```apacheconf
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresDefault                                      "access plus 1 month"

  # CSS
    ExpiresByType text/css                              "access plus 1 year"
  # Data interchange
    ExpiresByType application/atom+xml                  "access plus 1 hour"
    ExpiresByType application/rdf+xml                   "access plus 1 hour"
    ExpiresByType application/rss+xml                   "access plus 1 hour"
    ExpiresByType application/json                      "access plus 0 seconds"
    ExpiresByType application/ld+json                   "access plus 0 seconds"
    ExpiresByType application/schema+json               "access plus 0 seconds"
    ExpiresByType application/geo+json                  "access plus 0 seconds"
    ExpiresByType application/xml                       "access plus 0 seconds"
    ExpiresByType text/calendar                         "access plus 0 seconds"
    ExpiresByType text/xml                              "access plus 0 seconds"
  # Favicon (cannot be renamed!) and cursor images
    ExpiresByType image/vnd.microsoft.icon              "access plus 1 week"
    ExpiresByType image/x-icon                          "access plus 1 week"
  # HTML
    ExpiresByType text/html                             "access plus 0 seconds"
  # JavaScript
    ExpiresByType text/javascript                       "access plus 1 year"
  # Manifest files
    ExpiresByType application/manifest+json             "access plus 1 week"
    ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"
    ExpiresByType text/cache-manifest                   "access plus 0 seconds"
  # Markdown
    ExpiresByType text/markdown                         "access plus 0 seconds"
  # Media files
    ExpiresByType audio/ogg                             "access plus 1 month"
    ExpiresByType image/bmp                             "access plus 1 month"
    ExpiresByType image/gif                             "access plus 1 month"
    ExpiresByType image/jpeg                            "access plus 1 month"
    ExpiresByType image/svg+xml                         "access plus 1 month"
    ExpiresByType image/webp                            "access plus 1 month"
    # PNG and animated PNG
    ExpiresByType image/apng                            "access plus 1 month"
    ExpiresByType image/png                             "access plus 1 month"
    # HEIF Images
    ExpiresByType image/heic                            "access plus 1 month"
    ExpiresByType image/heif                            "access plus 1 month"
    # HEIF Image Sequence
    ExpiresByType image/heics                           "access plus 1 month"
    ExpiresByType image/heifs                           "access plus 1 month"
    # AVIF Images
    ExpiresByType image/avif                            "access plus 1 month"
    # AVIF Image Sequence
    ExpiresByType image/avis                            "access plus 1 month"
    ExpiresByType video/mp4                             "access plus 1 month"
    ExpiresByType video/ogg                             "access plus 1 month"
    ExpiresByType video/webm                            "access plus 1 month"
  # WebAssembly
    ExpiresByType application/wasm                      "access plus 1 year"
  # Web fonts
    # Collection
    ExpiresByType font/collection                       "access plus 1 month"
    # Embedded OpenType (EOT)
    ExpiresByType application/vnd.ms-fontobject         "access plus 1 month"
    ExpiresByType font/eot                              "access plus 1 month"
    # OpenType
    ExpiresByType font/opentype                         "access plus 1 month"
    ExpiresByType font/otf                              "access plus 1 month"
    # TrueType
    ExpiresByType application/x-font-ttf                "access plus 1 month"
    ExpiresByType font/ttf                              "access plus 1 month"
    # Web Open Font Format (WOFF) 1.0
    ExpiresByType application/font-woff                 "access plus 1 month"
    ExpiresByType application/x-font-woff               "access plus 1 month"
    ExpiresByType font/woff                             "access plus 1 month"
    # Web Open Font Format (WOFF) 2.0
    ExpiresByType application/font-woff2                "access plus 1 month"
    ExpiresByType font/woff2                            "access plus 1 month"
  # Other
    ExpiresByType text/x-cross-domain-policy            "access plus 1 week"
</IfModule>
```
