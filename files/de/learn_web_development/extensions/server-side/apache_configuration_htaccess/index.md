---
title: "Apache-Konfiguration: .htaccess"
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Apache `.htaccess`-Dateien ermöglichen es Benutzern, Verzeichnisse des von ihnen kontrollierten Webservers zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptserver-Konfigurationsdatei (normalerweise `httpd.conf` genannt) haben, sollten Sie diese Logik unter einem `Directory`-Block hinzufügen.

Sehen Sie sich [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache HTTPD-Dokumentationsseite an, um mehr darüber zu erfahren, was `.htaccess`-Dateien leisten können.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen behandeln, die Sie `.htaccess` hinzufügen können, und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen im Block nur auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert wurde und der Server es geladen hat. So verhindern wir, dass unser Server abstürzt, wenn das Modul nicht geladen wurde.

## Weiterleitungen

Es gibt Zeiten, in denen wir Benutzern mitteilen müssen, dass eine Ressource entweder vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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

Die möglichen Werte für den ersten Parameter sind unten aufgelistet. Wenn der erste Parameter nicht enthalten ist, wird er standardmäßig auf `temp` gesetzt.

- permanent
  - : Gibt einen permanenten Weiterleitungsstatus (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Weiterleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Ressourcenübergreifende Freigaben

Die erste Gruppe von Direktiven steuert den [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing)-Zugriff auf Ressourcen vom Server. CORS ist ein auf HTTP-Headern basierender Mechanismus, der es einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, für die ein Browser die Ressourcen laden soll.

Aus Sicherheitsgründen beschränken Browser HTTP-Anfragen über verschiedene Quellen, die von Skripten initiiert werden. Zum Beispiel befolgen `XMLHttpRequest` und die Fetch-API die gleiche Origin-Richtlinie. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von derselben Quelle anfordern, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines darunter liegenden Verzeichnisses überschreiben, wird jede Anfrage von externen Servern bedient, was wahrscheinlich nicht das ist, was Sie möchten.

Eine Alternative besteht darin, explizit anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Website haben. Im Beispiel unten beschränken wir den Zugriff auf ein Unterdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigen.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Ressourcenübergreifende Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Zulassen der ressourcenübergreifenden Nutzung von Bildern und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann es zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu mindern, sollten Sie das `crossorigin`-Attribut in den Bildern verwenden, die Sie anfordern, sowie den untenstehenden Codeausschnitt in Ihrer `.htaccess`, um den vom Server gesendeten CORS-Header einzustellen.

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

Der [Probleme mit Google Fonts Leitfaden](https://developers.google.com/fonts/docs/troubleshooting) von Google Chrome teilt uns mit, dass, obwohl Google Fonts den CORS-Header bei jeder Antwort senden kann, einige Proxy-Server ihn entfernen könnten, bevor der Browser ihn verwenden kann, um die Schriftart zu rendern.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Ressourcenübergreifende Zeitmessung

Die [Resource Timing Level 1](https://www.w3.org/TR/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf die vollständigen Timing-Informationen für Ressourcen in einem Dokument zuzugreifen.

Der [Timing-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwortheader gibt Ursprünge an, denen gestattet ist, Werte von Attributen einzusehen, die über Funktionen der Resource Timing API abgerufen werden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet werden würden.

Wenn eine Ressource nicht mit `Timing-Allow-Origin` bedient wird oder wenn der Header nach der Anfrage den Ursprung nicht enthält, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf Null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/-meldungen

Apache ermöglicht es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, je nach Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Siehe die [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationsseite für weitere Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie `MultiViews` für das Verzeichnis funktionieren, auf das sich die Konfiguration bezieht.

Die Auswirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat, und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis, schaut nach Dateien, die foo.\* genannt sind, und erstellt effektiv eine Typenkarte, die all diese Dateien benennt, und weist ihnen die gleichen Medientypen und Inhaltskodierungen zu, die es hätte, wenn der Client eine davon namentlich angefordert hätte. Danach wählt sie das Beste aus, das den Anforderungen des Clients entspricht.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das sich diese Konfiguration bezieht, und verhindert, dass Apache als Folge einer Umschreibung einen 404-Fehler zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten auf den für eine HTTP-Antwort ausgewählten Inhalt zuzuweisen, indem Muster in der URI oder Dateinamen auf die Metadateneinträge abgebildet werden.

Zum Beispiel definieren die Dateinamenerweiterungen von Inhaltsdateien oft den Internet-Medientyp des Inhalts, die Sprache, den Zeichensatz und die Inhaltscodierung. Diese Informationen werden in HTTP-Nachrichten gesendet, die den Inhalt enthalten, und werden bei der Inhaltsverhandlung bei der Auswahl von Alternativen verwendet, sodass die Präferenzen des Benutzers respektiert werden, wenn eine der mehreren möglichen Inhalte bereitgestellt werden soll.

**Die Änderung der Metadaten für eine Datei ändert nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien immer noch von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Codierung) ändern, müssen Sie möglicherweise die betroffenen Dateien "berühren" (ihre letzte Änderung aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen (alias MIME-Typen) bereitstellen

Ordnet Medientypen einer oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen angemessen bedient werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie es in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben ist

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

## Setzen des Standardzeichensatz-Attributs

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle Inhalte sind UTF-8-Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` gekennzeichneten Ressourcen mit dem `UTF-8`-Zeichensatz zu bedienen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Setzen des Zeichensatzes für spezifische Medientypen

Bedienen Sie die folgenden Dateitypen mit dem `charset`-Parameter auf `UTF-8` gesetzt, mit der verfügbaren [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive in `mod_mime`.

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

## `Mod_rewrite` und die `RewriteEngine`-Direktiven

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu modifizieren. Dies erlaubt es Ihnen, beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl an Regeln und eine unbegrenzte Anzahl an angehängten Bedingungsregeln für jede Regel, um einen wirklich flexiblen und leistungsstarken URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Server-Variablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um ein granulares URL-Matching zu erreichen.

### Aktivieren von `mod_rewrite`

Das grundlegende Muster zum Aktivieren von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Schalten Sie die Rewrite-Engine ein (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren) wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation dokumentiert
2. Aktivieren Sie die `FollowSymLinks`-Option, wenn sie nicht bereits aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation
3. Wenn Ihr Webhost die `FollowSymlinks`-Option nicht zulässt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, wobei Sie sich des [Leistungseinflusses](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks) bewusst sein sollten

   - Einige Cloud-Hosting-Dienste verlangen, dass Sie `RewriteBase` festlegen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Je nachdem, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren

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

Diese Rewrite-Regeln leiten von der unsicheren `http://`-Version zur sicheren `https://`-Version der URL um, wie im [Apache HTTPD Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, wird es fehlschlagen, das Zertifikat zu validieren, wenn Validierungsanfragen auf HTTPS umgeleitet werden. Aktivieren Sie die benötigte(n) Bedingung(en).

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

Diese Direktiven werden `www.example.com` zu `example.com` umschreiben.

Sie sollten Inhalte nicht in mehreren Ursprüngen duplizieren (mit und ohne www). Dies kann SEO-Probleme (doppelte Inhalte) verursachen. Daher sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen (wenn sie die Funktion unterstützen).

Setzen Sie die Variable `%{ENV:PROTO}`, um Umschreibungen automatisch mit dem entsprechenden Schema (`http` oder `https`) umzuleiten.

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

Diese Regeln fügen `www.` am Anfang einer URL ein. Es ist wichtig zu beachten, dass Sie nie denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme (doppelte Inhalte) verursachen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL von Suchmaschinen gecrawlt werden soll.

Setzen Sie die Variable `%{ENV:PROTO}`, um Umschreibungen automatisch mit dem entsprechenden Schema (`http` oder `https`) umzuleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat nicht einer der während der Umleitung verwendeten Domains verarbeiten kann, sollten Sie die Bedingung aktivieren.

Das folgende könnte keine gute Idee sein, wenn Sie für bestimmte Teile Ihrer Website "echte" Subdomains verwenden.

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

Das folgende Beispiel sendet den `X-Frame-Options`-Antwortheader mit dem Wert DENY, um Browsern mitzuteilen, den Inhalt der Webseite nicht in irgendeinem Frame anzuzeigen, um die Website vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten über [die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) lesen: `SAMEORIGIN` und `ALLOW-FROM`.

Selbst wenn Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass es jegliche Einbindung Ihres Inhalts verbietet (z.B.: wenn Benutzer Ihre Website über eine Google-Bildersuchergebnisseite besuchen).

Trotzdem sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, auf denen ein Benutzer einen statusändernden Vorgang ausführen kann (z.B. Seiten, die Links für One-Click-Käufe, Checkout- oder Bankübertragungsbestätigungsseiten enthalten, Seiten, die permanente Konfigurationsänderungen vornehmen, etc.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site Scripting und anderen Inhalts-Injektionsangriffen, indem es eine `Content Security Policy` festlegt, die vertrauenswürdige Quellen von Inhalten für Ihre Website zulässt.

Es gibt keine Richtlinie, die auf alle Websites passt, das folgende Beispiel ist als Richtlinien gedacht, die Sie für Ihre Website anpassen können.

Um die Implementierung Ihrer CSP zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie damit erreichen wollen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei in einem beliebigen vom Server verwendeten Format wie `index.html` oder `index.php` enthalten.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, vor der Ansicht verborgen, jedoch nicht vor dem Zugriff, wenn man ihren Namen und Standort kennt. Diese Art von Dateien enthält normalerweise Benutzerpräferenzen oder den gespeicherten Zustand eines Dienstprogramms und können recht private Orte wie zum Beispiel die Verzeichnisse `.git` oder `.svn` umfassen.

Das Verzeichnis `.well-known/` stellt [den Standardpfad (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) für "well-known locations" dar (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf seinen sichtbaren Inhalt nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Backup- und Quelldateien, die von einigen Texteditoren hinterlassen werden können und ein Sicherheitsrisiko darstellen, wenn jemand darauf Zugriff hat.

Aktualisieren Sie den regulären Ausdruck `<FilesMatch>` im folgenden Beispiel, um alle Dateien einzuschließen, die möglicherweise auf Ihrem Produktionsserver landen und sensible Informationen über Ihre Website preisgeben können. Diese Dateien können unter anderem Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server ihn auf die sichere Version der Website umleitet, verbleibt immer noch ein Zeitfenster (die anfängliche HTTP-Verbindung) für einen Angreifer, um die Anfrage herabzustufen oder umzuleiten.

Der folgende Header sorgt dafür, dass ein Browser nur über HTTPS mit Ihrem Server Verbindung aufnimmt, unabhängig davon, was die Benutzer in der Adressleiste des Browsers eingeben.

Seien Sie sich bewusst, dass Strict Transport Security nicht widerrufen werden kann, und Sie müssen sicherstellen, dass Sie in der Lage sind, die Seite über HTTPS so lange zu bedienen, wie Sie es im `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser den MIME-Typ der Antwort erraten

1. Beschränkt standardmäßig alle Abrufe auf den Ursprung der aktuellen Website, indem die `default-src`-Direktive auf `'self'` gesetzt wird - dies fungiert als Rückfallebene zu allen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

   - Dies ist praktisch, da Sie nicht alle auf Ihre Seite anwendbaren Fetch-Direktiven angeben müssen, z.B.: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, etc
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen, von welcher bzw. welchen Site(s) Ihre Website Ressourcen laden darf. Andernfalls wird sie auf den gleichen Ursprung beschränkt wie die Seite, die die Anfrage stellt

2. Untersagt das `<base>`-Element auf der Website. Dies soll verhindern, dass Angreifer die Standorte von Ressourcen ändern, die von relativen URLs geladen werden

   - Wenn Sie das `<base>`-Element verwenden möchten, dann verwenden Sie `base-uri 'self'` stattdessen

3. Erlaubt nur Formularübermittlungen vom aktuellen Ursprung mit: `form-action 'self'`
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb z.B. des `<iframe>` oder `<object>`-Elements einbetten, indem: `frame-ancestors 'none'` gesetzt wird.

   - Die Direktive `frame-ancestors` hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden, und ist ähnlich dem `X-Frame-Options`-Header
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP bedient werden, behandelt, als ob sie sicher über HTTPS geladen worden wären, indem die Direktive `upgrade-insecure-requests` gesetzt wird

   - **`upgrade-insecure-requests` sichert das Top-Level-Navigation nicht für HTTPS. Wenn Sie erzwingen wollen, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen**

6. Einschließt den `Content-Security-Policy`-Header in alle Antworten, die in der Lage sind, Scripting auszuführen. Dazu gehören die häufig verwendeten Dateitypen: HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien nicht in einem "Browsing-Kontext" Skripte ausführen können, werden sie eingeschlossen, um [Web Worker](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) zu adressieren

Einige ältere Browser versuchten, den Inhaltstyp einer Ressource zu erraten, selbst wenn er auf der Serverkonfiguration nicht richtig eingerichtet war. Dadurch wird das Risiko von Drive-By-Download-Angriffen und Cross-Origin-Datenlecks verringert.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Policy

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind, andere Ressourcen anzufordern (oder zu diesen zu navigieren).

Dazu gehören häufig genutzte Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Worker.

Um die Verweisung vollständig zu verhindern, geben Sie den Wert `no-referrer` an. Beachten Sie, dass sich dies negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren der `TRACE` HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode kann in einigen Szenarien erfolgreich eingesetzt werden, um die Anmeldeinformationen legitimer Benutzer zu stehlen, obwohl sie harmlos erscheint. Siehe [A Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential)

Moderne Browser verhindern mittlerweile TRACE-Anfragen, die über JavaScript erstellt wurden, jedoch wurden andere Möglichkeiten entdeckt, TRACE-Anfragen mit Browsern zu senden, wie z.B. unter Verwendung von Java.

Wenn Sie Zugriff auf die Hauptserver-Konfigurationsdatei haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Antwortheaders

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. ihren Namen, Versionsnummer)

Dieser Header bietet keinen Mehrwert, und in einigen Fällen können die darin enthaltenen Informationen Schwachstellen aufdecken

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn möglich, sollten Sie den `X-Powered-By`-Header auf Sprach-/Framework-Ebene deaktivieren (z.B.: für PHP können Sie das tun, indem Sie die folgenden Einstellungen in `php.ini` vornehmen.

```ini
expose_php = off;
```

## Entfernen des von Apache generierten Fußzeilentextes zur Serverinformation

Verhindern Sie, dass Apache eine abschließende Fußzeile mit Informationen über den Server zu servergenerierten Dokumenten hinzufügt (z.B. Fehlermeldungen, Verzeichnislisten, etc.). Siehe die [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Direktive für weitere Informationen über die von der Serversignatur bereitgestellten Informationen und die [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens)-Direktive für Informationen über die Konfiguration der in der Signatur bereitgestellten Informationen.

```apacheconf
ServerSignature Off
```

## Reparatur defekter `AcceptEncoding`-Header

Einige Proxys und Sicherheitssoftware manipulieren oder entfernen den `Accept-Encoding` HTTP-Header. Weitere Details finden Sie unter [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/).

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

## Komprimierung von Medientypen

Komprimieren Sie alle Ausgaben, die mit einem der folgenden Medientypen gekennzeichnet sind, unter Verwendung der [AddOutputFilterByType Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

Weisen Sie die folgenden Dateinamenerweiterungen dem angegebenen Codierungstyp unter Verwendung von [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bedienen kann (dies wird sie NICHT dazu bringen, dass Apache sie komprimiert!). Wenn diese Dateitypen ohne einen entsprechenden `Content-Encoding`-Antwortheader bedient wurden, würden Clientanwendungen (z.B. Browser) nicht wissen, dass sie zuerst die Antwort dekomprimieren müssen und daher nicht in der Lage sein, den Inhalt zu verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Ablauf der Zwischenspeicherung

Bedienen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum unter Verwendung des [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Moduls sowie der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires) Header.

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
