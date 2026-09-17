---
title: "Apache-Konfiguration: .htaccess"
short-title: Apache .htaccess
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Apache-.htaccess-Dateien ermöglichen Benutzern, Verzeichnisse des Webservers zu konfigurieren, die sie kontrollieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie also Zugriff auf die Hauptkonfigurationsdatei des Servers haben (die üblicherweise `httpd.conf` heißt), sollten Sie diese Logik dort in einem `Directory`-Block hinzufügen.

Weitere Details dazu, was .htaccess-Dateien tun können, finden Sie unter [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache-HTTPD-Dokumentationswebsite.

Im weiteren Verlauf dieses Dokuments werden verschiedene Konfigurationsoptionen erläutert, die Sie zu `.htaccess` hinzufügen können, sowie ihre Wirkung.

Die meisten der folgenden Blöcke verwenden die Direktive [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule), um die Anweisungen innerhalb des Blocks nur auszuführen, wenn das entsprechende Modul korrekt konfiguriert wurde und der Server es geladen hat. Auf diese Weise verhindern wir, dass unser Server abstürzt, wenn das Modul nicht geladen wurde.

## Weiterleitungen

Manchmal müssen wir Benutzern mitteilen, dass eine Ressource vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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

Die möglichen Werte für den ersten Parameter sind unten aufgeführt. Wenn der erste Parameter nicht angegeben wird, ist der Standardwert `temp`.

- permanent
  - : Gibt einen dauerhaften Weiterleitungsstatus (301) zurück, der angibt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Weiterleitungsstatus (302) zurück. **Dies ist der Standardwert**.
- seeother
  - : Gibt den Status „See Other“ (303) zurück, der angibt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt den Status „Gone“ (410) zurück, der angibt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das Argument _URL_ weggelassen werden.

## Ressourcen unterschiedlicher Herkunft

Der erste Satz von Direktiven steuert den [CORS](https://fetch.spec.whatwg.org/)-Zugriff (Cross-Origin Resource Sharing) auf Ressourcen des Servers. CORS ist ein HTTP-Header-basierter Mechanismus, der einem Server ermöglicht, die externen Origins (Domain, Protokoll oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen erlauben soll.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Beispielsweise folgen XMLHttpRequest und die Fetch API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann Ressourcen nur von derselben Origin anfordern, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Origins enthält die passenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis für jede Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines untergeordneten Verzeichnisses überschreiben, in dem Sie diese Direktive festgelegt haben, wird jede Anfrage von externen Servern berücksichtigt, was wahrscheinlich nicht Ihren Wünschen entspricht.

Eine Alternative besteht darin, explizit anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Website haben. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptwebsite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigten.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Bilder unterschiedlicher Herkunft

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und unter [Zulassen der herkunftsübergreifenden Verwendung von Bildern und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann dies zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit solcher Angriffe zu verringern, sollten Sie das Attribut `crossorigin` in den angeforderten Bildern verwenden und den folgenden Codeausschnitt in Ihrer `.htaccess`, um den CORS-Header auf dem Server festzulegen.

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

Der [Leitfaden zur Fehlerbehebung für Google Fonts](https://fonts.google.com/faq#troubleshooting) von Google Chrome weist darauf hin, dass Google Fonts zwar möglicherweise den CORS-Header mit jeder Antwort sendet, einige Proxy-Server ihn jedoch entfernen können, bevor der Browser ihn zum Rendern der Schriftart verwenden kann.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Timing von Ressourcen unterschiedlicher Herkunft

Die [Resource-Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf die vollständigen Timing-Informationen für Ressourcen in einem Dokument zuzugreifen.

Der Antwort-Header [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin) gibt Origins an, die Werte von Attributen sehen dürfen, die über Funktionen der Resource Timing API abgerufen werden. Diese würden andernfalls aufgrund von Cross-Origin-Beschränkungen als null gemeldet.

Wenn eine Ressource nicht mit `Timing-Allow-Origin` bereitgestellt wird oder der Header nach der Anfrage die Origin nicht enthält, werden einige Attribute des Objekts `PerformanceResourceTiming` auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/-meldungen

Apache ermöglicht es Ihnen, Benutzern je nach Art des Fehlers, den sie erhalten, benutzerdefinierte Fehlerseiten bereitzustellen.

Die Fehlerseiten werden als URLs dargestellt. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade beginnen (relativ zum DocumentRoot) oder eine vollständige URL sein, die der Client auflösen kann.

Weitere Informationen finden Sie in der Dokumentation zur [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationswebsite.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst die Funktionsweise von MultiViews für das Verzeichnis, auf das die Konfiguration angewendet wird.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, liest der Server das Verzeichnis und sucht nach Dateien mit dem Namen foo.\*. Dabei erstellt er effektiv eine Type Map, die alle diese Dateien benennt und ihnen dieselben Medientypen und Content-Encodings zuweist, die sie hätten, wenn der Client eine von ihnen namentlich angefordert hätte. Anschließend wählt er die beste Übereinstimmung mit den Anforderungen des Clients aus.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration angewendet wird, und verhindert, dass Apache infolge eines Rewrite einen 404-Fehler zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichenkodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um dem für eine HTTP-Antwort ausgewählten Inhalt Content-Metadaten zuzuweisen. Dazu werden Muster in der URI oder in Dateinamen den Metadatenwerten zugeordnet.

Beispielsweise definieren die Dateinamenerweiterungen von Inhaltsdateien häufig den Internetmedientyp, die Sprache, den Zeichensatz und die Inhaltskodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und bei der Content Negotiation zur Auswahl von Alternativen verwendet, sodass die Präferenzen des Benutzers bei der Auswahl eines von mehreren möglichen bereitzustellenden Inhalten berücksichtigt werden.

**Das Ändern der Metadaten einer Datei ändert nicht den Wert des Headers Last-Modified. Daher können ein Client oder Proxy weiterhin zuvor zwischengespeicherte Kopien mit den vorherigen Headern verwenden. Wenn Sie die Metadaten ändern (Sprache, Content-Type, Zeichensatz oder Kodierung), müssen Sie möglicherweise betroffene Dateien „touch“en (ihr letztes Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Content-Header erhalten.**

### Ressourcen mit den korrekten Medientypen bereitstellen (auch MIME-Typen genannt)

Ordnet Medientypen einer oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen angemessen bereitgestellt werden.

Server sollten für JavaScript-Ressourcen `text/javascript` verwenden, wie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben.

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

## Das Standardattribut `charset` festlegen

Jeder Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle Inhalte verwenden UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` gekennzeichneten Ressourcen mit dem Zeichensatz `UTF-8` bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Den Zeichensatz für bestimmte Medientypen festlegen

Stellen Sie die folgenden Dateitypen mit dem auf `UTF-8` gesetzten Parameter `charset` bereit. Verwenden Sie hierfür die in `mod_mime` verfügbare Direktive [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset).

```apacheconf
<IfModule mod_mime.c>
  AddCharset utf-8 \
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

## Die Direktiven `Mod_rewrite` und `RewriteEngine`

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch anhand von Regeln für reguläre Ausdrücke zu ändern. Dadurch können Sie beliebige URLs auf jede gewünschte Weise Ihrer internen URL-Struktur zuordnen.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl angehängter Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken Mechanismus zur URL-Manipulation bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Abgleichung zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster zum Aktivieren von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Aktivieren Sie die Rewrite Engine (dies ist erforderlich, damit die Direktiven `RewriteRule` funktionieren), wie in der Dokumentation zu [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) beschrieben.
2. Aktivieren Sie die Option `FollowSymLinks`, sofern sie nicht bereits aktiviert ist. Siehe die Dokumentation zu [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options).
3. Wenn Ihr Webhoster die Option `FollowSymlinks` nicht erlaubt, müssen Sie sie auskommentieren oder entfernen und anschließend die Zeile `Options +SymLinksIfOwnerMatch` einkommentieren. Beachten Sie jedoch die [Auswirkungen auf die Leistung](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks).
   - Einige Cloud-Hosting-Dienste verlangen, dass Sie `RewriteBase` festlegen.
   - Siehe die [Rackspace-FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase).
   - Abhängig von der Konfiguration Ihres Servers müssen Sie möglicherweise auch die Direktive [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions) verwenden, um einige Optionen für die Rewrite Engine zu aktivieren.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  Options +FollowSymlinks
  # Options +SymLinksIfOwnerMatch
  # RewriteBase /
  # RewriteOptions <options>
</IfModule>
```

### HTTPS erzwingen

Diese Rewrite-Regeln leiten von der unsicheren `http://`-Version zur sicheren `https://`-Version der URL weiter, wie im [Apache-HTTPD-Wiki](https://cwiki.apache.org/confluence/spaces/HTTPD/pages/115522478/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's-Encrypt-Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt die Validierung des Zertifikats fehl, wenn Validierungsanfragen zu HTTPS weitergeleitet werden. Aktivieren Sie die benötigte(n) Bedingung(en).

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

### Von `www.`-URLs weiterleiten

Diese Direktiven schreiben `www.example.com` in `example.com` um.

Sie sollten Inhalte nicht auf mehreren Origins duplizieren (mit und ohne www). Dies kann SEO-Probleme verursachen (duplizierte Inhalte); daher sollten Sie eine der Alternativen auswählen und die andere weiterleiten. Sie sollten außerdem [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen, sofern sie diese Funktion unterstützen.

Legen Sie die Variable `%{ENV:PROTO}` fest, damit Rewrites automatisch mit dem passenden Schema (`http` oder `https`) weiterleiten können.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für Weiterleitungen verfügbar sind.

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

### `www.` am Anfang von URLs einfügen

Diese Regeln fügen `www.` am Anfang einer URL ein. Es ist wichtig zu beachten, dass Sie denselben Inhalt niemals unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme verursachen (duplizierte Inhalte); daher sollten Sie eine der Alternativen auswählen und die andere weiterleiten. Für Suchmaschinen, die dies unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Legen Sie die Variable `%{ENV:PROTO}` fest, damit Rewrites automatisch mit dem passenden Schema (`http` oder `https`) weiterleiten können.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für Weiterleitungen verfügbar sind. Wenn Ihr TLS-Zertifikat eine der bei der Weiterleitung verwendeten Domains nicht verarbeiten kann, sollten Sie die Bedingung aktivieren.

Das Folgende ist möglicherweise keine gute Idee, wenn Sie für bestimmte Bereiche Ihrer Website „echte“ Subdomains verwenden.

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

Das folgende Beispiel sendet den Antwort-Header `X-Frame-Options` mit DENY als Wert und informiert Browser darüber, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Website gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht für alle die beste Einstellung. Sie sollten sich über [die beiden anderen möglichen Werte für den Header `X-Frame-Options`](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) informieren: `SAMEORIGIN` und `ALLOW-FROM`.

Obwohl Sie den Header `X-Frame-Options` für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass selbst jedes Einbetten Ihrer Inhalte verboten wird, beispielsweise wenn Benutzer Ihre Website über eine Google-Bildersuchseite besuchen.

Dennoch sollten Sie sicherstellen, dass Sie den Header `X-Frame-Options` für alle Seiten senden, auf denen ein Benutzer eine zustandsändernde Aktion ausführen kann (z. B. Seiten mit Kauf-Links mit einem Klick, Checkout- oder Bestätigungsseiten für Banküberweisungen, Seiten, die dauerhafte Konfigurationsänderungen vornehmen usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) verringert das Risiko von Cross-Site-Scripting- und anderen Content-Injection-Angriffen, indem eine `Content Security Policy` festgelegt wird, die vertrauenswürdige Inhaltsquellen für Ihre Website erlaubt.

Es gibt keine Richtlinie, die für alle Websites geeignet ist. Das folgende Beispiel ist als Leitlinie gedacht, die Sie für Ihre Website anpassen können.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/tools/csp-builder) verwenden. Sie sollten außerdem einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie möchten.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

Diese CSP:

1. Beschränkt standardmäßig alle Abrufe auf die Origin der aktuellen Website, indem die Direktive `default-src` auf `'self'` gesetzt wird. Dies dient als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.
   - Dies ist praktisch, da Sie nicht alle für Ihre Website geltenden Fetch-Direktiven angeben müssen, beispielsweise: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'` usw.
   - Diese Beschränkung bedeutet auch, dass Sie explizit definieren müssen, von welchen Website(s) Ihre Website Ressourcen laden darf. Andernfalls wird dies auf dieselbe Origin wie die anfragende Seite beschränkt.

2. Verbietet das Element `<base>` auf der Website. Dadurch wird verhindert, dass Angreifer die Speicherorte von Ressourcen ändern, die über relative URLs geladen werden.
   - Wenn Sie das Element `<base>` verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`.

3. Erlaubt nur Formularübermittlungen von der aktuellen Origin mit: `form-action 'self'`.
4. Verhindert, dass alle Websites, einschließlich Ihrer eigenen, Ihre Webseiten beispielsweise innerhalb des Elements `<iframe>` oder `<object>` einbetten, indem Folgendes festgelegt wird: `frame-ancestors 'none'`.
   - Die Direktive `frame-ancestors` hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden, und ähnelt dem Header `X-Frame-Options`.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn auch `frame-ancestors` angegeben ist.

5. Erzwingt, dass der Browser alle über HTTP bereitgestellten Ressourcen so behandelt, als wären sie sicher über HTTPS geladen worden, indem die Direktive `upgrade-insecure-requests` festgelegt wird.
   - **`upgrade-insecure-requests` gewährleistet kein HTTPS für die Navigation auf oberster Ebene. Wenn Sie erzwingen möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den Header `Strict-Transport-Security` einschließen.**

6. Schließt den Header `Content-Security-Policy` in alle Antworten ein, die Skripte ausführen können. Dies umfasst die häufig verwendeten Dateitypen HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem „Browsing Context“ ausführen können, werden sie einbezogen, um [Web Workers](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) abzudecken.

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei in einem Format enthalten, das der Server verwenden kann, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen werden Dateien, die mit einem Punkt beginnen, nicht angezeigt, sind aber nicht vor Zugriff geschützt, wenn Sie ihren Namen und Speicherort kennen. Diese Dateitypen enthalten üblicherweise Benutzereinstellungen oder den gespeicherten Zustand eines Dienstprogramms und können recht private Bereiche umfassen, beispielsweise die Verzeichnisse `.git` oder `.svn`.

Das Verzeichnis `.well-known/` stellt das [standardmäßige (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfadpräfix für „well-known locations“ dar (z. B. `/.well-known/manifest.json`, `/.well-known/keybase.txt`). Daher sollte der Zugriff auf dessen sichtbaren Inhalt nicht blockiert werden.

```apacheconf
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_URI} "!(^|/)\.well-known/([^./]+./?)+$" [NC]
    RewriteCond %{SCRIPT_FILENAME} -d [OR]
    RewriteCond %{SCRIPT_FILENAME} -f
    RewriteRule "(^|/)\." - [F]
</IfModule>
```

## Zugriff auf Dateien mit vertraulichen Informationen blockieren

Blockieren Sie den Zugriff auf Sicherungs- und Quelldateien, die von einigen Texteditoren zurückgelassen werden können und ein Sicherheitsrisiko darstellen können, wenn jeder Zugriff auf sie hat.

Aktualisieren Sie den regulären Ausdruck `<FilesMatch>` im folgenden Beispiel, um alle Dateien einzuschließen, die auf Ihrem Produktionsserver landen könnten und vertrauliche Informationen über Ihre Website preisgeben können. Diese Dateien können unter anderem Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, bleibt selbst dann, wenn der Server ihn zur sicheren Version der Website weiterleitet, ein Zeitfenster für einen Angreifer offen (die anfängliche HTTP-Verbindung), um die Anfrage herabzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser sich nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was Benutzer in die Adressleiste des Browsers eingeben.

Beachten Sie, dass Strict Transport Security nicht widerrufbar ist und Sie sicherstellen müssen, die Website über HTTPS bereitstellen zu können, solange Sie dies in der Direktive `max-age` festgelegt haben. Wenn Sie keine gültige TLS-Verbindung mehr haben, beispielsweise aufgrund eines abgelaufenen TLS-Zertifikats, sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, sich über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser die MIME-Typen der Antwort erraten

Einige ältere Browser versuchten, den Content-Type einer Ressource zu erraten, selbst wenn er in der Serverkonfiguration nicht korrekt festgelegt war. Dies verringert das Risiko von Drive-by-Download-Angriffen und herkunftsübergreifenden Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir schließen den Header `Referrer-Policy` in Antworten für Ressourcen ein, die andere Ressourcen anfordern oder zu ihnen navigieren können.

Dies umfasst häufig verwendete Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Workers.

Um die Weitergabe von Referrer-Informationen vollständig zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass sich dies negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## HTTP-Methode `TRACE` deaktivieren

Die Methode [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE) kann, obwohl sie scheinbar harmlos ist, in einigen Szenarien erfolgreich genutzt werden, um die Zugangsdaten legitimer Benutzer zu stehlen. Siehe [Ein Cross-Site-Tracing-(XST)-Angriff](https://community.owasp.org/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.github.io/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern inzwischen TRACE-Anfragen, die über JavaScript gestellt werden. Es wurden jedoch andere Möglichkeiten entdeckt, TRACE-Anfragen mit Browsern zu senden, etwa mithilfe von Java.

Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben, verwenden Sie stattdessen die Direktive [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable).

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Den Antwort-Header `X-Powered-By` entfernen

Einige Frameworks wie PHP und ASP.NET setzen einen Header `X-Powered-By`, der Informationen über sie enthält, etwa ihren Namen und ihre Versionsnummer.

Dieser Header bietet keinen Mehrwert, und in einigen Fällen können die von ihm bereitgestellten Informationen Sicherheitslücken offenlegen.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn möglich, sollten Sie den Header `X-Powered-By` auf Sprach-/Framework-Ebene deaktivieren, z. B. können Sie dies für PHP durch folgende Einstellung in `php.ini` tun.

```ini
expose_php = off;
```

## Von Apache erzeugte Fußzeile mit Serverinformationen entfernen

Verhindern Sie, dass Apache an die vom Server erzeugten Dokumente eine abschließende Fußzeile mit Informationen über den Server anhängt, z. B. Fehlermeldungen, Verzeichnislisten usw. Weitere Informationen über die von der Serversignatur bereitgestellten Informationen finden Sie in der Dokumentation zur Direktive [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature). Informationen zur Konfiguration der in der Signatur bereitgestellten Informationen finden Sie in der Direktive [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens).

```apacheconf
ServerSignature Off
```

## Fehlerhafte Header `AcceptEncoding` beheben

Einige Proxys und Sicherheitssoftware verändern oder entfernen den HTTP-Header `Accept-Encoding`. Eine ausführlichere Erklärung finden Sie unter [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/).

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

Komprimieren Sie alle Ausgaben, die mit einem der folgenden Medientypen gekennzeichnet sind, mithilfe der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Erweiterungen auf Medientypen abbilden

Ordnen Sie die folgenden Dateinamenerweiterungen mithilfe von [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) dem angegebenen Kodierungstyp zu, damit Apache die Dateitypen mit dem passenden Antwort-Header `Content-Encoding` bereitstellen kann (dadurch werden sie NICHT von Apache komprimiert!). Wenn diese Dateitypen ohne einen passenden Antwort-Header `Content-Encoding` bereitgestellt würden, wüssten Client-Anwendungen, z. B. Browser, nicht, dass sie die Antwort zunächst dekomprimieren müssen, und könnten daher den Inhalt nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Stellen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum mithilfe des Moduls [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) sowie der Header [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires) bereit.

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
