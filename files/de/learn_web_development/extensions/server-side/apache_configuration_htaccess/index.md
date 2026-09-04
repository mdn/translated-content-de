---
title: "Apache-Konfiguration: .htaccess"
short-title: Apache .htaccess
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: e2c34c75df6238fbeff790100cea1ab7e552e49e
---

Apache .htaccess-Dateien ermöglichen es Benutzern, die Verzeichnisse des Webservers zu konfigurieren, die sie kontrollieren, ohne die Hauptkonfigurationsdatei zu ändern.

Während dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugang zur Hauptserverkonfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik in einem `Directory`-Block dort hinzufügen.

Weitere Details zu `.htaccess`-Dateien finden Sie unter [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache HTTPD-Dokumentationsseite.

Im Folgenden werden verschiedene Konfigurationsoptionen besprochen, die Sie zu `.htaccess` hinzufügen können und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen innerhalb des Blocks nur dann auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert und vom Server geladen wurde. Auf diese Weise schützen wir unseren Server vor Abstürzen, wenn das Modul nicht geladen wurde.

## Umleitungen

Es gibt Zeiten, in denen wir Benutzern mitteilen müssen, dass sich eine Ressource entweder vorübergehend oder dauerhaft verschoben hat. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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

Die möglichen Werte für den ersten Parameter sind unten aufgeführt. Wenn der erste Parameter nicht enthalten ist, wird er standardmäßig auf `temp` gesetzt.

- permanent
  - : Gibt einen permanenten Umleitungs-Status (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Umleitungs-Status (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Cross-origin Ressourcen

Der erste Satz von Direktiven steuert den Zugriff auf Ressourcen vom Server mittels [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing). CORS ist ein Mechanismus, der auf HTTP-Headern basiert und es einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, die ein Browser zulassen soll, um Ressourcen zu laden.

Aus Sicherheitsgründen beschränken Browser plattformübergreifende HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel folgen XMLHttpRequest und die Fetch API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von dem Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive später in der Konfiguration oder in der Konfiguration eines Verzeichnisses unterhalb desjenigen, in dem Sie diese gesetzt haben, nicht überschreiben, wird jede Anfrage von externen Servern berücksichtigt. Dies ist wahrscheinlich nicht das, was Sie wollen.

Eine Alternative besteht darin, explizit anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Website haben sollen. Im folgenden Beispiel beschränken wir den Zugriff auf ein Unterdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigt haben.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-origin Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und unter [Gewährleisten von Cross-Origin-Nutzung von Bildern und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann das zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut in den von Ihnen angeforderten Bildern verwenden und das folgende Code-Snippet in Ihrer `.htaccess`-Datei verwenden, um den CORS-Header vom Server zu setzen.

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

Der [Google Fonts Leitfaden zur Fehlersuche](https://fonts.google.com/faq#troubleshooting) von Google Chrome weist darauf hin, dass, während Google Fonts den CORS-Header möglicherweise mit jeder Antwort sendet, einige Proxy-Server ihn möglicherweise entfernen, bevor der Browser ihn zum Rendern der Schriftart verwenden kann.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-origin Resource Timing

Die [Resource Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert ein Interface für Webanwendungen, um auf die vollständigen Zeitinformationen für Ressourcen in einem Dokument zuzugreifen.

Der [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwortheader gibt Ursprünge an, die die Werte der über Funktionen der Resource Timing API abgerufenen Attribute sehen dürfen, die andernfalls aufgrund von plattformübergreifenden Einschränkungen als Null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header den Ursprung nach der Erstellung der Anfrage nicht enthält, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf Null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlermeldungen/-seiten

Apache ermöglicht es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, abhängig von der Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs dargestellt. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade beginnen (relativ zum DocumentRoot) oder eine vollständige URL sein, die der Client auflösen kann.

Weitere Informationen finden Sie in der [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationsseite.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie `MultiViews` für das Verzeichnis, auf das die Konfiguration zutrifft, funktioniert.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis und sucht nach Dateien mit dem Namen foo.*, und erstellt im Wesentlichen eine Typenkarte, die alle diese Dateien benennt und ihnen die gleichen Medientypen und Inhaltskodierungen zuweist, die es hätte, wenn der Client eine von ihnen per Name angefordert hätte. Der Server wählt dann die beste Übereinstimmung mit den Anforderungen des Clients aus.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das sich diese Konfiguration bezieht und verhindert, dass Apache einen 404-Fehler als Ergebnis einer Umleitung zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichenkodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten auf das ausgewählte Inhaltselement für eine HTTP-Antwort durch das Zuordnen von Mustern in der URI oder Dateinamen zu den Metadatenwerten zuzuweisen.

Beispielsweise definieren die Dateinamenerweiterungen von Inhaltsdateien oft den Internetmedientyp, die Sprache, den Zeichensatz und die Inhaltskodierung des Inhalts. Diese Informationen werden in den HTTP-Nachrichten, die diesen Inhalt enthalten, gesendet und bei der Inhaltsauswahl verwendet, sodass die Präferenzen des Benutzers bei der Auswahl eines von mehreren möglichen Inhalten berücksichtigt werden.

**Das Ändern der Metadaten einer Datei ändert nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien immer noch von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Kodierung) ändern, müssen Sie möglicherweise die betroffenen Dateien 'berühren' (das Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen (auch bekannt als MIME-Typen) bereitstellen

Ordnet Medientypen mit einer oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen ordnungsgemäß bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben.

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

## Setzen des Standard-Zeichensatz-Attributs

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle, Inhalte sind im UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen, die als `text/html` oder `text/plain` gekennzeichnet sind, mit dem `UTF-8`-Zeichensatz bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Setzen des Zeichensatzes für spezifische Medientypen

Stellen Sie die folgenden Dateitypen mit dem `charset`-Parameter auf `UTF-8` bereit, indem Sie die [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive verwenden, die in `mod_mime` verfügbar ist.

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

## `Mod_rewrite` und die `RewriteEngine`-Direktiven

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu modifizieren. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl von verbundenen Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umweltvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Übereinstimmung zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster zur Aktivierung von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Aktivieren Sie die Umleitungsmotor (dies ist nötig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation beschrieben
2. Aktivieren Sie die `FollowSymLinks`-Option, wenn sie noch nicht aktiviert ist. Siehe [Kernoptionen](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation
3. Wenn Ihr Webhost die `FollowSymlinks`-Option nicht zulässt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, aber beachten Sie den [Leistungseffekt](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks)
   - Einige Cloud-Hosting-Services erfordern, dass Sie `RewriteBase` setzen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Abhängig davon, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um bestimmte Optionen für den Umleitungsmotor zu aktivieren

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

Diese Umleitungsregeln leiten von der unsicheren `http://`-Version zur sicheren `https://`-Version der URL um, wie im [Apache HTTPD-Wiki](https://cwiki.apache.org/confluence/spaces/HTTPD/pages/115522478/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt die Validierung des Zertifikats fehl, wenn Validierungsanfragen zu HTTPS umgeleitet werden. Schalten Sie die erforderlichen Bedingung(en) ein.

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

Diese Direktiven werden `www.example.com` in `example.com` umwandeln.

Sie sollten keine Inhalte an mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann SEO-Probleme (doppelter Inhalt) verursachen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen (wenn sie die Funktion unterstützen).

Definieren Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen automatisch auf das entsprechende Schema umzuleiten (`http` oder `https`).

Die Regel geht davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen standardmäßig für die Umleitung verfügbar sind.

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

### Einfügen des `www.` am Anfang der URLs

Diese Regeln fügen `www.` an den Anfang einer URL ein. Es ist wichtig zu beachten, dass Sie niemals denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme (doppelter Inhalt) verursachen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für unterstützende Suchmaschinen sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen automatisch auf das entsprechende Schema umzuleiten (`http` oder `https`).

Die Regel geht davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen standardmäßig für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat eine der während der Umleitung verwendeten Domains nicht verarbeiten kann, sollten Sie die Bedingung aktivieren.

Das Folgende ist möglicherweise keine gute Idee, wenn Sie „echte“ Subdomains für bestimmte Teile Ihrer Website verwenden.

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

Das folgende Beispiel sendet den `X-Frame-Options`-Antwortheader mit dem Wert DENY, um Browser darüber zu informieren, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Website vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten sich über [die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) informieren: `SAMEORIGIN` und `ALLOW-FROM`.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass er sogar die Einrahmung Ihrer Inhalte verbietet (z.B.: wenn Benutzer Ihre Website über eine Google-Bildersuchseite besuchen).

Nichtsdestotrotz sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die dem Benutzer erlauben, eine zustandsverändernde Operation durchzuführen (z.B. Seiten mit einem Klick-Kauf-Links, Checkout- oder Bankübertragungsbestätigungsseiten, Seiten, die dauerhafte Konfigurationsänderungen vornehmen, etc.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) verringert das Risiko von Cross-Site Scripting und anderen Inhaltsinjektionsangriffen durch das Setzen einer `Content Security Policy`, die vertrauenswürdige Quellen von Inhalten für Ihre Website erlaubt.

Es gibt keine Richtlinie, die für alle Websites passt. Das untenstehende Beispiel soll Ihnen als Leitfaden dienen, den Sie für Ihre Website modifizieren können.

Um die Implementierung Ihrer CSP zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) nutzen, um sicherzustellen, dass Ihr Header das tut, was Sie beabsichtigen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

Diese CSP:

1. Beschränkt alle Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem die `default-src`-Direktive auf `'self'` gesetzt wird - die als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}} fungiert.
   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven spezifizieren müssen, die für Ihre Website gelten, beispielsweise: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, etc.
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen, von welcher(n) Seite(n) Ihre Website Ressourcen laden darf. Andernfalls wird es auf denselben Ursprung wie die Seite, die die Anfrage stellt, beschränkt.

2. Verboten das `<base>`-Element auf der Website. Dies geschieht, um zu verhindern, dass Angreifer die Standorte von Ressourcen verändern, die von relativen URLs geladen werden.
   - Wenn Sie das `<base>`-Element verwenden möchten, dann verwenden Sie stattdessen `base-uri 'self'`.

3. Erlaubt nur Formularübermittlungen vom aktuellen Ursprung mit: `form-action 'self'`.
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb von z.B. dem `<iframe>` oder `<object>`-Element einbetten, indem `frame-ancestors 'none'` gesetzt wird.
   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu vermeiden, und ist ähnlich wie der `X-Frame-Options`-Header.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist.

5. Zwingt den Browser, alle Ressourcen, die über HTTP bereitgestellt werden, so zu behandeln, als wären sie sicher über HTTPS geladen worden, indem die `upgrade-insecure-requests`-Direktive gesetzt wird.
   - **`upgrade-insecure-requests` stellt nicht sicher, dass die oberste Navigationsebene über HTTPS erfolgt. Wenn Sie möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen.**

6. Beinhaltet den `Content-Security-Policy`-Header in allen Antworten, die Skripting ausführen können. Dazu gehören die häufig verwendeten Dateitypen: HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien in einem „Browsing-Kontext“ keine Skripte ausführen können, sind sie enthalten, um [Web-Worker](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) anzusprechen.

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei im konfigurierten Format des Servers haben, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, von der Ansicht verborgen, jedoch nicht vom Zugriff, wenn Sie ihren Namen und ihren Standort kennen. Diese Arten von Dateien enthalten normalerweise Benutzereinstellungen oder den gesicherten Zustand eines Dienstprogramms und können eher private Bereiche enthalten, z.B. das `.git`- oder das `.svn`-Verzeichnis.

Das `.well-known/`-Verzeichnis stellt den [Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfadpräfix für "bekannte Orte" dar (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf dessen sichtbaren Inhalt nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Sicherungs- und Quelldateien, die möglicherweise von einigen Texteditoren hinterlassen werden und ein Sicherheitsrisiko darstellen können, wenn sie für jedermann zugänglich sind.

Aktualisieren Sie den regulären Ausdruck `<FilesMatch>` im folgenden Beispiel, um alle Dateien einzuschließen, die möglicherweise auf Ihrem Produktionsserver landen und sensible Informationen über Ihre Website preisgeben können. Diese Dateien können Konfigurationsdateien oder Dateien, die Metadaten über das Projekt enthalten, unter anderem umfassen.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinem Browser eingibt, selbst wenn der Server ihn zur sicheren Version der Website umleitet, bleibt dennoch ein Zeitraum offen (die initiale HTTP-Verbindung) für einen Angreifer, um die Anfrage zu verschlechtern oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Beachten Sie, dass Strict Transport Security nicht widerrufbar ist und Sie sicherstellen müssen, dass die Seite so lange über HTTPS bereitgestellt werden kann, wie Sie es in der `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), werden Ihre Besucher eine Fehlermeldung sehen, selbst wenn versucht wird, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser den Antwortinhalt als MIME schnüffeln

Einige ältere Browser würden versuchen, den Inhaltstyp einer Ressource zu erraten, selbst wenn er nicht richtig in der Serverkonfiguration eingerichtet ist. Dies reduziert die Exposition gegenüber Drive-by-Download-Angriffen und plattformübergreifenden Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die andere Ressourcen anfordern können (oder zu ihnen navigieren können).

Dazu gehören häufig verwendete Ressourcentypen: HTML-, CSS-, XML/SVG-, PDF-Dokumente, Skripte und Worker.

Um einen vollständigen Referrer-Leckschutz zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass der Effekt die Analysetools negativ beeinflussen könnte.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren der `TRACE`-HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode kann zwar harmlos erscheinen, jedoch erfolgreich in einigen Szenarien genutzt werden, um legitime Benutzeranmeldedaten zu stehlen. Siehe [A Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern jetzt TRACE-Anfragen, die über JavaScript gemacht werden, jedoch wurden andere Wege entdeckt, TRACE-Anfragen mit Browsern zu senden, wie z.B. mit Java.

Wenn Sie Zugang zur Hauptserverkonfigurationsdatei haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Antwortheaders

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. ihren Namen, Versionsnummer).

Dieser Header bietet keinen Mehrwert und in einigen Fällen können die bereitgestellten Informationen Schwachstellen aufdecken.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf der Ebene der Sprache/des Frameworks deaktivieren (z.B.: für PHP können Sie dies tun, indem Sie Folgendes in `php.ini` setzen).

```ini
expose_php = off;
```

## Entfernen der Apache-generierten Serverinformationen im Footer

Verhindern Sie, dass Apache eine nachfolgende Fußzeile mit Informationen über den Server in die vom Server generierten Dokumente (z.B. Fehlermeldungen, Verzeichnislisten etc.) einfügt. Siehe die [`ServerSignature`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Dokumentation für weitere Informationen darüber, was die Serversignatur bietet, und die [`ServerTokens`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#servertokens) für Informationen über die Konfiguration der in der Signatur bereitgestellten Informationen.

```apacheconf
ServerSignature Off
```

## Behebung der fehlerhaften `AcceptEncoding`-Header

Einige Proxies und Sicherheitssoftware beschädigen oder entfernen den `Accept-Encoding` HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detailliertere Erklärung.

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

## Medienarten komprimieren

Komprimieren Sie alle Ausgaben, die mit einem der folgenden Medientypen gekennzeichnet sind, mit der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Zuordnung von Erweiterungen zu Medientypen

Ordnen Sie die folgenden Dateierweiterungen dem angegebenen Kodierungstyp zu, indem Sie [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) verwenden, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bereitstellen kann (dies lässt Apache sie NICHT komprimieren!). Wenn diese Dateitypen ohne einen entsprechenden `Content-Encoding`-Antwortheader bereitgestellt würden, könnten Client-Anwendungen (z.B. Browser) nicht wissen, dass sie die Antwort zuerst dekomprimieren müssen und könnten daher den Inhalt nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Caching-Ablauf

Stellen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum bereit, indem Sie das [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Modul sowie die [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires)-Header verwenden.

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
