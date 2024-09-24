---
title: "Apache-Konfiguration: .htaccess"
slug: Learn/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}

Apache .htaccess-Dateien erlauben es Benutzern, Verzeichnisse des von ihnen kontrollierten Webservers zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie also Zugriff auf die Haupt-Serverkonfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache HTTPD-Dokumentationsseite für weitere Details darüber, was .htaccess-Dateien leisten können.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen besprechen, die Sie zu `.htaccess` hinzufügen können und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen im Block nur auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert und vom Server geladen wurde. Auf diese Weise verhindern wir, dass unser Server abstürzt, falls das Modul nicht geladen wurde.

## Umleitungen

Es gibt Zeiten, in denen wir den Benutzern mitteilen müssen, dass eine Ressource entweder vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

```apacheconf
<IfModule mod_alias.c>
  # Umleitung zu einer URL auf einem anderen Host
  Redirect "/service" "http://foo2.example.com/service"

  # Umleitung zu einer URL auf demselben Host
  Redirect "/one" "/two"

  # Äquivalente Umleitung zu einer URL auf demselben Host
  Redirect temp "/one" "/two"

  # Dauerhafte Umleitung zu einer URL auf demselben Host
  Redirect permanent "/three" "/four"

  # Umleitung zu einer externen URL
  # Verwendung von regulären Ausdrücken und RedirectMatch
  RedirectMatch "^/oldfile\.html/?$" "http://example.com/newfile.php"
</IfModule>
```

Die möglichen Werte für den ersten Parameter sind unten aufgeführt. Wenn der erste Parameter nicht enthalten ist, wird er auf `temp` standardmäßig gesetzt.

- permanent
  - : Gibt einen Statuscode für eine permanente Umleitung (301) zurück, der angibt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Umleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der angibt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der angibt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Cross-origin Ressourcen

Der erste Satz von Direktiven steuert den [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing)-Zugriff auf Ressourcen vom Server. CORS ist ein HTTP-Header-basiertes Mechanismus, das es einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen zulassen soll.

Aus Sicherheitsgründen beschränken Browser Cross-Origin HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel befolgen XMLHttpRequest und die Fetch API die Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von demselben Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Solange Sie die Direktive später in der Konfiguration oder in der Konfiguration eines darunter befindlichen Verzeichnisses nicht überschreiben, wird jede Anfrage von externen Servern beachtet, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative ist, ausdrücklich anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Seite haben. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie erreichen wollen.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-origin Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Ermöglichen der Cross-Origin Verwendung von Bildern und Canvas](/de/docs/Web/HTML/CORS_enabled_image) dokumentiert, können zu [Fingerprinting](/de/docs/Glossary/Fingerprinting) Angriffen führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut in den von Ihnen angeforderten Bildern verwenden und den folgenden Code-Schnipsel in Ihrem `.htaccess` einsetzen, um den CORS-Header vom Server zu setzen.

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

Im [Google Fonts Fehlerbehebungs-Leitfaden](https://developers.google.com/fonts/docs/troubleshooting) von Google Chrome wird darauf hingewiesen, dass, obwohl Google Fonts den CORS-Header möglicherweise bei jeder Antwort sendet, einige Proxyserver ihn abstreifen können, bevor der Browser ihn verwenden kann, um die Schriftart anzuzeigen.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-origin Ressourcentiming

Die [Resource Timing Level 1](https://www.w3.org/TR/resource-timing/)-Spezifikation definiert eine Schnittstelle, die Webanwendungen Zugriff auf die vollständigen Zeitinformationen für Ressourcen in einem Dokument gewährt.

Der [Timing-Allow-Origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin)-Antwortheader spezifiziert Ursprünge, die Werte von Attributen, die über Funktionen der Resource Timing API abgerufen wurden, sehen dürfen, die ansonsten aufgrund von Cross-Origin Beschränkungen als Null gemeldet würden.

Wenn eine Ressource ohne `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header nach der Anforderung den Ursprung nicht einschließt, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf Null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Anpassbare Fehlerseiten/Nachrichten

Apache erlaubt es Ihnen, abhängig vom Typ des Fehlers, den der Benutzer erhält, benutzerdefinierte Fehlerseiten bereitzustellen.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum `DocumentRoot`) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Weitere Informationen finden Sie in der Dokumentation zur [ErrorDocument Directive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationsseite.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlerverhütung

Diese Einstellung beeinflusst die Funktionsweise von MultiViews für das Verzeichnis, auf das die Konfiguration angewendet wird.

Der Effekt von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält und /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis, sucht nach Dateien, die foo.\* genannt werden, und fälscht effektiv eine Typkarte, die alle diese Dateien benennt, und weist ihnen dieselben Medientypen und Inhaltcodierungen zu, als hätte der Client eine von ihnen ausdrücklich angefordert. Dann wählt er den besten Treffer für die Anforderungen des Clients aus.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration angewendet wird, und verhindert, dass Apache einen 404-Fehler als Ergebnis einer Neuschreibung zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten dem ausgewählten Inhalt für eine HTTP-Antwort zuzuweisen, indem Muster in der URI oder den Dateinamen auf die Metadatenwerte abgebildet werden.

Beispielsweise definieren die Dateinamenerweiterungen von Inhaltsdateien häufig den Internet-Medientyp des Inhalts, die Sprache, das Zeichensatz und die Inhaltcodierung. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und werden in der Inhaltsverhandlung beim Auswählen von Alternativen verwendet, sodass die Präferenzen des Benutzers berücksichtigt werden, wenn eine von mehreren möglichen Inhalten geliefert wird.

**Das Ändern der Metadaten für eine Datei ändert nicht den Wert des `Last-Modified`-Headers. Daher können bereits zwischengespeicherte Kopien dennoch von einem Client oder Proxy verwendet werden, mit den vorherigen Headers. Wenn Sie die Metadaten (Sprache, Inhaltsart, Zeichensatz oder Codierung) ändern, müssen Sie möglicherweise betroffene Dateien 'berühren' (d.h. ihr `Last-Modified`-Datum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheaders erhalten.**

### Ressourcen mit den richtigen Medientypen liefern (auch bekannt als MIME-Typen)

Weist Medientypen einem oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen ordnungsgemäß bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben.

```apacheconf
<IfModule mod_mime.c>
  # Datenaustausch
    AddType application/atom+xml      atom
    AddType application/json          json map topojson
    AddType application/ld+json       jsonld
    AddType application/rss+xml       rss
    AddType application/geo+json      geojson
    AddType application/rdf+xml       rdf
    AddType application/xml           xml
  # JavaScript
    AddType text/javascript           js mjs
  # Manifest-Dateien
    AddType application/manifest+json     webmanifest
    AddType application/x-web-app-manifest+json         webapp
    AddType text/cache-manifest           appcache
  # Mediendateien
    AddType audio/mp4                     f4a f4b m4a
    AddType audio/ogg                     oga ogg opus
    AddType image/bmp                     bmp
    AddType image/svg+xml                 svg svgz
    AddType image/webp                    webp
    AddType video/mp4                     f4v f4p m4v mp4
    AddType video/ogg                     ogv
    AddType video/webm                    webm
    AddType image/x-icon    cur ico
  # HEIF-Bilder
    AddType image/heic                    heic
    AddType image/heif                    heif
  # HEIF-Bildsequenz
    AddType image/heics                   heics
    AddType image/heifs                   heifs
  # AVIF-Bilder
    AddType image/avif                    avif
  # AVIF-Bildsequenz
    AddType image/avis                    avis
  # WebAssembly
    AddType application/wasm              wasm
  # Web-Schriftarten
    AddType font/woff                         woff
    AddType font/woff2                        woff2
    AddType application/vnd.ms-fontobject                eot
    AddType font/ttf                          ttf
    AddType font/collection                   ttc
    AddType font/otf                          otf
  # Sonstiges
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

## Standardmäßiges charset-Attribut einstellen

Jedes Webinhalt verfügt über ein Zeichensatz. Die meisten, wenn nicht alle, Inhalte sind UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen, die als `text/html` oder `text/plain` gekennzeichnet sind, mit dem `UTF-8`-Charset zu bedienen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Das charset für bestimmte Medientypen festlegen

Bedienen Sie die folgenden Dateitypen mit dem charset-Parameter auf `UTF-8` gesetzt, indem Sie die [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive verwenden, die in `mod_mime` verfügbar ist.

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu ändern. Dadurch können Sie beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abbilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl angehängter Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Übereinstimmung zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster zum Aktivieren von `mod_rewrite` ist Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Schalten Sie die Rewrite-Engine ein (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der Dokumentation zur [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) dokumentiert.
2. Aktivieren Sie die Option `FollowSymLinks`, falls sie noch nicht aktiviert ist. Siehe Dokumentation zu den [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options).
3. Wenn Ihr Webhost die `FollowSymlinks`-Option nicht zulässt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, beachten Sie jedoch den [Leistungseinfluss](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks).

   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` setzen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase).
   - Abhängig davon, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren.

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

Diese Rewrite-Regeln leiten von der unsicheren `http://`-Version zur sicheren `https://`-Version der URL um, wie auf der [Apache HTTPD-Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, wird die Zertifikatsvalidierung fehlschlagen, wenn Validierungsanforderungen zu HTTPS umgeleitet werden. Aktivieren Sie die benötigten Bedingung(en).

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

### Umleitung von `www.` URLs

Diese Direktiven werden `www.example.com` zu `example.com` umschreiben.

Sie sollten keine Inhalte an mehreren Ursprungen (mit und ohne www) duplizieren. Dies kann zu SEO-Problemen (duplizierte Inhalte) führen, und daher sollten Sie eine der Alternativen auswählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen (falls sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen zu ermöglichen, die automatisch mit dem entsprechenden Schema (`http` oder `https`) umleiten.

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

### Einfügung von `www.` am Anfang von URLs

Diese Regeln fügen `www.` am Anfang einer URL ein. Es ist wichtig zu beachten, dass Sie niemals denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann zu SEO-Problemen (duplizierte Inhalte) führen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen zu ermöglichen, die automatisch mit dem entsprechenden Schema (`http` oder `https`) umleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat eine der während der Umleitung verwendeten Domains nicht verarbeiten kann, sollten Sie die entsprechende Bedingung aktivieren.

Das Folgende könnte keine gute Idee sein, wenn Sie "echte" Subdomains für bestimmte Teile Ihrer Website verwenden.

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

Das folgende Beispiel sendet den `X-Frame-Options` Antwortheader mit DEM Wert DENY und informiert Browser darüber, die Website-Inhalte in keinem Frame anzuzeigen, um die Webseite vor [Clickjacking](/de/docs/Glossary/Clickjacking) zu schützen.

Dies könnte nicht die beste Einstellung für jeden sein. Sie sollten über [die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1): `SAMEORIGIN` und `ALLOW-FROM` lesen.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den möglichen Nachteil, dass es sogar jede Einbettung Ihres Inhalts verbietet (z.B.: wenn Benutzer Ihre Website über eine Google Bildersuche-Ergebnisseite besuchen).

Nichtsdestotrotz sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die einem Benutzer ermöglichen, eine Zustand ändernde Operation durchzuführen (z.B. Seiten, die Anzeige mit einem Klick auf den Kauf, Zahlungsabschluss oder Banküberweisungsbestätigungsseiten, Seiten, die dauerhafte Konfigurationsänderungen durchführen, etc.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site-Scripting und anderen Inhaltseinspritzungsangriffen, indem eine `Content Security Policy` festgelegt wird, die vertrauenswürdige Inhaltsquellen für Ihre Website zulässt.

Es gibt keine Richtlinie, die für alle Websites geeignet ist. Das folgende Beispiel ist als Richtlinie für Ihnen gedacht, die Sie für Ihre Website anpassen können.

Um die Implementierung von CSP zu erleichtern, können Sie einen Online [CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie erwarten.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei im vom Server konfigurierten Format enthalten, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, vor der Ansicht verborgen, aber nicht vor dem Zugriff, wenn Sie ihren Namen und Standort kennen. Diese Art von Dateien enthalten normalerweise Benutzerpräferenzen oder den gespeicherten Zustand eines Hilfsprogramms und können relativ private Orte wie z.B. die `.git` oder `.svn`-Verzeichnisse umfassen.

Das `.well-known/`-Verzeichnis stellt [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) für "wohlbekannte Orte" dar (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugang zu seinem sichtbaren Inhalt nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Backup- und Quelldateien, die von einigen Texteditoren möglicherweise hinterlassen werden und ein Sicherheitsrisiko darstellen können, wenn jemand darauf zugreifen kann.

Aktualisieren Sie den `<FilesMatch>`-Regulären Ausdruck im folgenden Beispiel, um alle Dateien einzubeziehen, die sich möglicherweise auf Ihrem Produktionsserver befinden und sensible Informationen über Ihre Website offenlegen können. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, auch wenn der Server ihn zur sicheren Version der Website umleitet, bleibt dennoch ein Zeitfenster (die anfängliche HTTP-Verbindung) für einen Angreifer, um die Anforderung herabzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser sich nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Seien Sie sich darüber im Klaren, dass Strict Transport Security nicht widerrufbar ist und Sie sicherstellen müssen, dass die Website so lange über HTTPS bereitgestellt wird, wie Sie im `max-age`-Direktiv angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Aktivieren Sie Ihre Website zur HSTS-Vorabladeaufnahme.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser den Antworttyp erraten

1. Beschränkt alle Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem die `default-src`-Direktive auf `'self'` gesetzt wird, die als Fallback für alle [Fetch-Direktiven](/de/docs/Glossary/Fetch_directive) dient.

   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven angeben müssen, die auf Ihre Seite angewendet werden, zum Beispiel: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, usw.
   - Diese Einschränkung bedeutet auch, dass Sie ausdrücklich angeben müssen, von welchen Seiten Ihre Website Ressourcen laden darf. Andernfalls wird sie auf denselben Ursprung wie die Seite, die die Anfrage macht, beschränkt.

2. Verhindert das `<base>`-Element auf der Website. Dies dient dazu, Angreifer daran zu hindern, die Standorte von Ressourcen zu ändern, die aus relativen URLs geladen werden.

   - Wenn Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`.

3. Erlaubt nur Formularübertragungen sind vom aktuellen Ursprung mit: `form-action 'self'`.
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb von z.B. dem `<iframe>` oder `<object>`-Element einbetten, indem `frame-ancestors 'none'` gesetzt wird.

   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Glossary/Clickjacking) Angriffe zu vermeiden und ähnelt dem `X-Frame-Options`-Header.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist.

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP geliefert werden, so behandelt, als wären sie sicher über HTTPS geladen worden, indem die `upgrade-insecure-requests`-Direktive gesetzt wird.

   - **`upgrade-insecure-requests` stellt nicht sicher, dass das Top-Level-Navigation HTTPS verwendet. Wenn Sie die Website selbst zwingen wollen, über HTTPS geladen zu werden, müssen Sie den `Strict-Transport-Security`-Header einfügen.**

6. Beinhaltet den `Content-Security-Policy`-Header in allen Antworten, die Scripting ausführen können. Dies schließt die im Allgemeinen verwendeten Dateitypen ein: HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem "Browsser-Kontext" ausführen können, werden sie hinzugefügt, um [Web Worker](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers) anzuvisieren.

Einige ältere Browser versuchten, den Inhaltstyp einer Ressource zu erraten, selbst wenn er nicht korrekt in der Serverkonfiguration eingerichtet war. Dies reduziert die Exposition gegenüber Drive-by-Download-Angriffen und Cross-Origin-Datenverluste.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den `Referrer-Policy`-Header in die Antworten für Ressourcen ein, die anforderungsfähig sind (oder zu anderen Ressourcen navigieren können).

Dies schließt häufig verwendete Ressourcentypen ein: HTML-, CSS-, XML/SVG-, PDF-Dokumente, Skripte und Worker.

Um das Referrer-Leck vollständig zu verhindern, geben Sie den Wert `no-referrer` an. Beachten Sie, dass der Effekt negative Auswirkungen auf Analysetools haben könnte.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren der `TRACE`-HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Methods/TRACE)-Methode kann, obwohl sie scheinbar harmlos ist, in einigen Szenarien erfolgreich verwendet werden, um legitime Benutzeranmeldeinformationen zu stehlen. Siehe [A Cross-Site Tracing (XST) attack](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern jetzt TRACE-Anforderungen, die über JavaScript gestellt werden, es wurden jedoch andere Möglichkeiten entdeckt, TRACE-Anforderungen mit Browsern zu stellen, wie z.B. die Verwendung von Java.

Wenn Sie Zugriff auf die Haupt-Serverkonfigurationsdatei haben, verwenden Sie die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Antwortheaders

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. ihren Namen, Versionsnummer).

Dieser Header bietet keinen Mehrwert und kann in einigen Fällen Informationen offenbaren, die Schwachstellen ausnutzen können.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header von der Sprache/Framework-Ebene deaktivieren (z.B.: für PHP, können Sie das durch Setzen des Folgenden in `php.ini` tun).

```ini
expose_php = off;
```

## Entfernen der von Apache erzeugten Serverinformationsfußzeile

Verhindern Sie, dass Apache eine abschließende Fußzeile mit Informationen über den Server in die vom Server generierten Dokumente (z.B. Fehlermeldungen, Verzeichnislisten, etc.) einfügt. Siehe die [`ServerSignature`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#serversignature) Dokumentation für weitere Informationen über das, was die Serversignatur bietet und die [`ServerTokens`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#servertokens) für Informationen über die Konfiguration der durch die Signatur bereitgestellten Informationen.

```apacheconf
ServerSignature Off
```

## Beheben gebrochener `AcceptEncoding`-Header

Einige Proxies und Sicherheitstools verstümmeln oder entfernen den `Accept-Encoding` HTTP-Header. Lesen Sie [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine ausführlichere Erklärung.

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

## Komprimieren von Medientypen

Komprimieren Sie gesamte Ausgabe mit einem der folgenden Medientypen mit der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Dateierweiterungen zu Medientypen zuordnen

Ordnern Sie den folgenden Dateierweiterungen den angegebenen Codierungstyp zu, indem Sie [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) verwenden, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bereitstellen kann (dies wird NICHT dazu führen, dass Apache sie komprimiert!). Wenn diese Dateitypen ohne einen passenden `Content-Encoding`-Antwortheader bereitgestellt würden, wüssten die Client-Programme (z.B. Browser) nicht, dass sie die Antwort zuerst dekomprimieren müssen und könnten den Inhalt somit nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Geben Sie Ressourcen mit einem weit entfernten Ablaufdatum über das Modul [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) sowie die Header [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Headers/Expires) an.

```apacheconf
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresDefault                                      "access plus 1 month"

  # CSS
    ExpiresByType text/css                              "access plus 1 year"
  # Datenaustausch
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
  # Favicon (kann nicht umbenannt werden!) und Cursorbilder
    ExpiresByType image/vnd.microsoft.icon              "access plus 1 week"
    ExpiresByType image/x-icon                          "access plus 1 week"
  # HTML
    ExpiresByType text/html                             "access plus 0 seconds"
  # JavaScript
    ExpiresByType text/javascript                       "access plus 1 year"
  # Manifest-Dateien
    ExpiresByType application/manifest+json             "access plus 1 week"
    ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"
    ExpiresByType text/cache-manifest                   "access plus 0 seconds"
  # Markdown
    ExpiresByType text/markdown                         "access plus 0 seconds"
  # Mediendateien
    ExpiresByType audio/ogg                             "access plus 1 month"
    ExpiresByType image/bmp                             "access plus 1 month"
    ExpiresByType image/gif                             "access plus 1 month"
    ExpiresByType image/jpeg                            "access plus 1 month"
    ExpiresByType image/svg+xml                         "access plus 1 month"
    ExpiresByType image/webp                            "access plus 1 month"
    # PNG und animierte PNG
    ExpiresByType image/apng                            "access plus 1 month"
    ExpiresByType image/png                             "access plus 1 month"
    # HEIF-Bilder
    ExpiresByType image/heic                            "access plus 1 month"
    ExpiresByType image/heif                            "access plus 1 month"
    # HEIF-Bildsequenz
    ExpiresByType image/heics                           "access plus 1 month"
    ExpiresByType image/heifs                           "access plus 1 month"
    # AVIF-Bilder
    ExpiresByType image/avif                            "access plus 1 month"
    # AVIF-Bildsequenz
    ExpiresByType image/avis                            "access plus 1 month"
    ExpiresByType video/mp4                             "access plus 1 month"
    ExpiresByType video/ogg                             "access plus 1 month"
    ExpiresByType video/webm                            "access plus 1 month"
  # WebAssembly
    ExpiresByType application/wasm                      "access plus 1 year"
  # Web-Schriftarten
    # Sammlung
    ExpiresByType font/collection                       "access plus 1 month"
    # Eingebettetes OpenType (EOT)
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
  # Sonstiges
    ExpiresByType text/x-cross-domain-policy            "access plus 1 week"
</IfModule>
```
