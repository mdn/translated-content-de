---
title: "Apache-Konfiguration: .htaccess"
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Apache `.htaccess`-Dateien ermöglichen es Benutzern, Verzeichnisse des von ihnen kontrollierten Webservers zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie also Zugang zur Hauptserver-Konfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache HTTPD-Dokumentationsseite für weitere Details zu dem, was `.htaccess`-Dateien tun können.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen diskutieren, die Sie zu `.htaccess` hinzufügen können, und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Directive, um die Anweisungen innerhalb des Blocks nur auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert und vom Server geladen wurde. Auf diese Weise schützen wir unseren Server davor abzustürzen, wenn das Modul nicht geladen wurde.

## Umleitungen

Es gibt Zeiten, in denen wir den Benutzern mitteilen müssen, dass eine Ressource entweder vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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
  - : Gibt einen permanenten Umleitungsstatus (301) zurück, der angibt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Umleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der angibt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der angibt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Ressourcenübergreifende Ressourcen (CORS)

Der erste Satz von Direktiven steuert den [CORS](https://fetch.spec.whatwg.org/)-Zugriff (Cross-Origin Resource Sharing) auf Ressourcen vom Server. CORS ist ein auf HTTP-Headern basierender Mechanismus, der einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, die ein Browser laden darf.

Aus Sicherheitsgründen beschränken Browser HTTP-Anfragen über Ressourcen hinweg, die von Skripten initiiert werden. Beispielsweise folgen XMLHttpRequest und die Fetch API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von demselben Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Es sei denn, Sie überschreiben die Direktive später in der Konfiguration oder in der Konfiguration eines Verzeichnisses unterhalb dem, wo Sie diese festlegen, wird jede Anfrage von externen Servern akzeptiert, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative ist es, explizit anzugeben, welche Domains Zugriff auf die Inhalte Ihrer Seite haben. Im untenstehenden Beispiel beschränken wir den Zugriff auf ein Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie tun wollten.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Ressourcenübergreifende Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Verwendung von ressourcenzulässigen Bildern und Canvas](/de/docs/Web/HTML/CORS_enabled_image) dokumentiert ist, können dies zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut in den Bildern verwenden, die Sie anfordern, und den folgenden Codeausschnitt in Ihrer `.htaccess`-Datei verwenden, um den CORS-Header vom Server festzulegen.

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

Die [Google Fonts-Problembehandlungsanleitung](https://developers.google.com/fonts/docs/troubleshooting) von Google Chrome sagt uns, dass, während Google Fonts den CORS-Header mit jeder Antwort senden kann, einige Proxy-Server ihn möglicherweise entfernen, bevor der Browser ihn verwenden kann, um die Schriftart zu rendern.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Ressourcenübergreifendes Resourcentiming

Die [Resource Timing Level 1](https://www.w3.org/TR/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf die vollständigen Zeitinformationen für Ressourcen in einem Dokument zuzugreifen.

Der Antwort-Header [Timing-Allow-Origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin) spezifiziert Ursprünge, die Werte von Attributen sehen dürfen, die über die Funktionen der Resource Timing API abgerufen wurden, die sonst aufgrund von Einschränkungen bei ressourcenübergreifenden Anforderungen als null berichtet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header den Ursprung nach dem Stellen der Anfrage nicht enthält, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/-nachrichten

Apache ermöglicht es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, abhängig von der Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) oder als volle URL, die der Client auflösen kann, beginnen.

Siehe die [ErrorDocument Directive](https://httpd.apache.org/docs/current/mod/core.html#errordocument)-Dokumentation auf der HTTPD-Dokumentationsseite für weitere Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie MultiViews für das Verzeichnis, auf das die Konfiguration angewendet wird, arbeiten.

Der Effekt von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis und sucht nach Dateien namens foo.\*, und erstellt effektiv eine Typenkarte, die all diese Dateien benennt, und ordnet ihnen die gleichen Medientypen und Inhaltscodierungen zu, die es hätte, wenn der Client für eine von ihnen nach Namen gefragt hätte. Es wählt dann die beste Übereinstimmung mit den Anforderungen des Clients.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration angewendet wird, und verhindert, dass Apache als Ergebnis einer Umschreibung einen 404-Fehler zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten dem für eine HTTP-Antwort ausgewählten Inhalt zuzuweisen, indem Muster in der URI oder den Dateinamen den Metadatenwerten zugeordnet werden.

Zum Beispiel definieren die Dateinamenerweiterungen von Inhaltsdateien oft den Internetmedientyp, die Sprache, den Zeichensatz und die Inhaltscodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und werden bei der Inhaltsverhandlung beim Auswählen von Alternativen verwendet, so dass die Vorlieben des Benutzers respektiert werden, wenn eines von mehreren möglichen Inhalten bereitgestellt wird.

**Das Ändern der Metadaten für eine Datei ändert nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien weiterhin von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Codierung) ändern, müssen Sie möglicherweise die betroffenen Dateien "bewegen" (ihr letztes Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen bereitstellen (auch bekannt als MIME-Typen)

Assoziiert Medientypen mit einer oder mehreren Erweiterungen, um sicherzustellen, dass die Ressourcen ordnungsgemäß bereitgestellt werden.

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

## Standard-Zeichensatz-Attribut festlegen

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle, Inhalte sind UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen mit dem Label `text/html` oder `text/plain` mit dem `UTF-8`-Zeichensatz bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Zeichensatz für spezifische Medientypen festlegen

Servieren Sie die folgenden Dateitypen mit dem `charset`-Parameter, der auf `UTF-8` gesetzt ist, mittels der in `mod_mime` verfügbaren [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Anweisung.

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen basierend auf regulären Ausdrucksregeln dynamisch zu ändern. Dies ermöglicht Ihnen, beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl von angehängten Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken Mechanismus zur URL-Manipulation zu bieten. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Headern, Zeitstempeln, externen Datenbankabfragen und verschiedenen anderen externen Programmen oder Handlern, die verwendet werden können, um ein feinkörniges URL-Matching zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster zur Aktivierung von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Aktivieren Sie die Rewrite-Engine (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation beschrieben
2. Aktivieren Sie die `FollowSymLinks`-Option, wenn sie noch nicht aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation
3. Wenn Ihr Webhost die `FollowSymlinks`-Option nicht erlaubt, müssen Sie diese auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, seien Sie sich jedoch der [Performance-Auswirkungen](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks) bewusst

   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` festlegen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Abhängig davon, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  Options +FollowSymlinks
  # Options +SymLinksIfOwnerMatch
  # RewriteBase /
  # RewriteOptions <options>
</IfModule>
```

### Erzwingung von HTTPS

Diese Rewrite-Regeln werden von der unsicheren `http://`-Version zur sicheren `https://`-Version der URL umleiten, wie im [Apache HTTPD-Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt die Validierung des Zertifikats fehl, wenn Validierungsanfragen zu HTTPS umgeleitet werden. Aktivieren Sie die benötigten Bedingung(en).

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

Diese Direktiven leiten `www.example.com` auf `example.com` um.

Sie sollten keinen Inhalt an mehreren Ursprüngen duplizieren (mit und ohne www). Dies kann SEO-Probleme (doppelter Inhalt) verursachen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [Canonic URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen durchsuchen sollen (wenn sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}`-Variable, um automatisch mit dem entsprechenden Schema (`http` oder `https`) umzuleiten.

Die Regel geht davon aus, dass sowohl HTTP als auch HTTPS-Umgebungen für Umleitungen verfügbar sind.

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

Diese Regeln werden `www.` am Anfang einer URL einfügen. Es ist wichtig zu beachten, dass Sie niemals denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme (doppelter Inhalt) verursachen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [Canonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Setzen Sie die `%{ENV:PROTO}`-Variable, um automatisch mit dem entsprechenden Schema (`http` oder `https`) umzuleiten.

Die Regel geht davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für Umleitungen verfügbar sind. Wenn Ihr TLS-Zertifikat eines der bei der Umleitung verwendeten Domains nicht verarbeiten kann, sollten Sie die Bedingung aktivieren.

Das Folgende ist möglicherweise keine gute Idee, wenn Sie "echte" Subdomains für bestimmte Teile Ihrer Website verwenden.

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

Das untenstehende Beispiel sendet den Antwort-Header `X-Frame-Options` mit dem Wert DENY, der Browser darüber informiert, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Website vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten [die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) lesen: `SAMEORIGIN` und `ALLOW-FROM`.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass es sogar irgendeine Rahmenbildung Ihres Inhalts verbietet (z. B. wenn Benutzer Ihre Website über eine Suchergebnisseite von Google Bildersuche besuchen).

Dennoch sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die es einem Benutzer ermöglichen, eine Statusänderungsoperation durchzuführen (z. B. Seiten, die Ein-Klick-Kauflinks enthalten, Checkout- oder Banküberweisungsbestätigungsseiten, Seiten, die dauerhafte Konfigurationsänderungen vornehmen, usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site-Scripting und anderen Injections-Angriffen, indem es eine `Content Security Policy` festlegt, die vertrauenswürdige Quellen für Inhalte auf Ihrer Website erlaubt.

Es gibt keine Richtlinie, die für alle Websites geeignet ist, das untenstehende Beispiel ist als Richtlinie gedacht, die Sie für Ihre Seite ändern können.

Um die Implementierung Ihrer CSP zu erleichtern, können Sie einen Online [CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie wollen, dass er tut.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei in welchem Format auch immer der Server konfiguriert ist, zu verwenden, wie `index.html` oder `index.php`, vorhanden haben.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, von der Ansicht versteckt, aber nicht vom Zugriff, wenn man ihren Namen und Standort kennt. Diese Art von Dateien enthalten gewöhnlich Benutzerpräferenzen oder den gespeicherten Zustand eines Dienstprogramms und können recht private Orte enthalten, wie zum Beispiel die `.git` oder `.svn`-Verzeichnisse.

Das `.well-known/`-Verzeichnis repräsentiert [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfad-Präfix für "wohlbekannte Orte" (z. B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`) und deshalb sollte der Zugang zu seinem sichtbaren Inhalt nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Backup- und Quelldateien, die möglicherweise von einigen Texteditoren hinterlassen werden und ein Sicherheitsrisiko darstellen können, wenn jemand Zugriff auf sie hat.

Aktualisieren Sie das `<FilesMatch>`-reguläre Ausdruck im folgenden Beispiel, um irgendwelche Dateien einzuschließen, die möglicherweise auf Ihrem Produktionsserver landen und sensible Informationen über Ihre Website preisgeben können. Diese Dateien können Konfigurationsdateien oder Dateien sein, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server sie zur sicheren Version der Website umleitet, bleibt immer noch ein Zeitfenster (die anfängliche HTTP-Verbindung), in dem ein Angreifer die Anfrage herabstufen oder umleiten könnte.

Der folgende Header stellt sicher, dass ein Browser immer nur über HTTPS eine Verbindung zu Ihrem Server herstellt, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Beachten Sie, dass Strict Transport Security nicht widerrufbar ist und Sie sicherstellen müssen, dass die Seite so lange wie angegeben im `max-age`-Direktiv über HTTPS verfügbar ist. Wenn Sie keine gültige TLS-Verbindung mehr haben (z. B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser die Antwort-MIME-Sniffen

1. Einschränkung aller Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem das `default-src`-Direktiv auf `'self'` gesetzt wird - welches als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}} dient.

   - Dies ist bequem, da Sie nicht alle Fetch-Direktiven angeben müssen, die auf Ihre Seite zutreffen, z. B.: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, etc.
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen von welchen Seite(n) Ihre Website Ressourcen laden darf. Andernfalls wird sie auf denselben Ursprung wie die Seite, die die Anfrage macht, beschränkt

2. Verbietet das `<base>`-Element auf der Website. Dies soll verhindern, dass Angreifer die Standorte von Ressourcen ändern, die aus relativen URLs geladen werden.

   - Wenn Sie das `<base>`-Element verwenden möchten, dann verwenden Sie `base-uri 'self'` stattdessen

3. Erlaubt Formulareinsendungen nur vom aktuellen Ursprung mit: `form-action 'self'`
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb von z. B. dem `<iframe>`- oder `<object>`-Element einbetten, indem: `frame-ancestors 'none'` gesetzt wird.

   - Das `frame-ancestors`-Direktiv hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden und ähnelt dem `X-Frame-Options`-Header
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist

5. Zwingt den Browser dazu, alle Ressourcen, die über HTTP bereitgestellt werden, so zu behandeln, als ob sie sicher über HTTPS geladen wurden, indem das `upgrade-insecure-requests`-Direktiv gesetzt wird

   - **`upgrade-insecure-requests` stellt nicht sicher, dass die oberste Navigation über HTTPS erfolgt. Wenn Sie wollen, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einbinden**

6. Fügt den `Content-Security-Policy`-Header in alle Antworten ein, die in der Lage sind, Scripting auszuführen. Dazu gehören häufig verwendete Dateitypen: HTML, XML und PDF-Dokumente. Obwohl JavaScript-Dateien keinen Code in einem "Browsing-Kontext" ausführen können, werden sie hinzugefügt, um [Web-Arbeiter](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers) zu erreichen

Einige ältere Browser versuchten, den Inhaltstyp einer Ressource zu erraten, selbst wenn er nicht korrekt auf der Serverkonfiguration eingerichtet ist. Dies reduziert die Exposition gegenüber Drive-by-Download-Angriffen und Cross-Origin-Datenschutzlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Policy

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind, andere Ressourcen anzufordern (oder zu einer anderen Ressource zu navigieren).

Dazu gehören häufig verwendete Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Arbeiters.

Um das Referrer-Leaking vollständig zu verhindern, geben Sie den Wert `no-referrer` an. Beachten Sie, dass der Effekt sich negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die unten aufgeführten, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren Sie die `TRACE`-HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Methods/TRACE)-Methode, obwohl scheinbar harmlos, kann in einigen Szenarien erfolgreich genutzt werden, um die Anmeldedaten legitimer Benutzer zu stehlen. Siehe [Ein Cross-Site Tracing (XST)-Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern nun TRACE-Anfragen, die über JavaScript gemacht werden, jedoch wurden andere Wege entdeckt, um TRACE-Anfragen mit Browsern zu senden, wie z. B. Java.

Wenn Sie Zugang zur Hauptserver-Konfigurationsdatei haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen Sie den `X-Powered-By`-Antwort-Header

Einige Frameworks wie PHP und ASP.NET setzen eine `X-Powered-By`-Header, der Informationen über sie enthält (z. B. ihren Namen, Versionsnummer).

Dieser Header bietet keinen Wert und in einigen Fällen können die Informationen, die er bietet, Schwachstellen aufdecken.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header von der Sprache/Framework-Ebene aus deaktivieren (z. B.: für PHP können Sie das durch Festlegen des folgenden in `php.ini` tun).

```ini
expose_php = off;
```

## Entfernen Sie die von Apache generierte Serverinformationsfußzeile

Verhindern Sie, dass Apache eine abschließende Fußzeile, die Informationen über den Server enthält, zu servergenerierten Dokumenten (z. B. Fehlermeldungen, Verzeichnislisten usw.) hinzufügt. Siehe die [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Dokumentation für weitere Informationen darüber, was die Serversignatur bereitstellt, und die [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens)-Dokumentation für Informationen darüber, wie Sie die in der Signatur bereitgestellten Informationen konfigurieren.

```apacheconf
ServerSignature Off
```

## Korrigieren Sie fehlerhafte `AcceptEncoding`-Header

Einige Proxies und Sicherheitssoftware beschädigen oder entfernen den `Accept-Encoding`-HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detailliertere Erklärung.

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

Komprimiert alle mit einem der folgenden Medientypen beschrifteten Ausgaben unter Verwendung der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Mapping von Erweiterungen zu Medientypen

Ordnen Sie die folgenden Dateinamenerweiterungen dem angegebenen Codierungstyp mit [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwort-Header bereitstellen kann (dies wird Apache NICHT dazu veranlassen, sie zu komprimieren!). Wenn diese Dateitypen ohne einen entsprechenden `Content-Encoding`-Antwort-Header bereitgestellt wurden, wüssten Client-Anwendungen (z. B. Browser) nicht, dass sie die Antwort zuerst dekomprimieren müssen, und sie wären daher nicht in der Lage, den Inhalt zu verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Bereiten Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum unter Verwendung des [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Moduls vor und der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Headers/Expires)-Header.

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
