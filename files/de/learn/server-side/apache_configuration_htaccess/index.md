---
title: "Apache-Konfiguration: .htaccess"
slug: Learn/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}

Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des von ihnen kontrollierten Webservers zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugang zur Hauptserverkonfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache HTTPD-Dokumentationsseite für weitere Details darüber, was .htaccess-Dateien tun können.

Der Rest dieses Dokuments behandelt verschiedene Konfigurationsoptionen, die Sie zu `.htaccess` hinzufügen können, und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Anweisung, um nur die Anweisungen innerhalb des Blocks auszuführen, wenn das entsprechende Modul richtig konfiguriert und vom Server geladen wurde. Auf diese Weise verhindern wir, dass unser Server abstürzt, wenn das Modul nicht geladen wurde.

## Weiterleitungen

Manchmal müssen wir den Benutzern mitteilen, dass eine Ressource entweder vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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
  - : Gibt einen permanenten Redirect-Status (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Redirect-Status (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Ressourcen über verschiedene Ursprünge hinweg

Der erste Satz an Anweisungen steuert den [CORS](https://fetch.spec.whatwg.org/)-Zugriff (Cross-Origin Resource Sharing) auf Ressourcen vom Server. CORS ist ein mechanismus auf HTTP-Header-Basis, das einem Server erlaubt, die externen Ursprünge (Domäne, Protokoll oder Port) anzugeben, die ein Browser zum Laden von Ressourcen zulassen sollte.

Aus Sicherheitsgründen schränken Browser von Skripten initiierte Cross-Origin-HTTP-Anfragen ein. Zum Beispiel folgen `XMLHttpRequest` und die Fetch API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von dem Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprungen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Anweisung fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Es sei denn, Sie überschreiben die Anweisung später in der Konfiguration oder in der Konfiguration eines darunter liegenden Verzeichnisses, werden alle Anfragen von externen Servern akzeptiert, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative ist es, ausdrücklich anzugeben, welche Domänen auf den Inhalt Ihrer Seite zugreifen dürfen. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomäne unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie tun möchten.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Bilder über verschiedene Ursprünge hinweg

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Zulassen der Nutzung von Bildern und Canvas über verschiedene Ursprünge hinweg](/de/docs/Web/HTML/CORS_enabled_image) dokumentiert, kann dies zu [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu mindern, sollten Sie das `crossorigin`-Attribut in den von Ihnen angeforderten Bildern verwenden sowie den Codeausschnitt unten in Ihrer `.htaccess`, um den CORS-Header vom Server zu setzen.

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

Googles Chrome's [Google Fonts Troubleshooting Guide](https://developers.google.com/fonts/docs/troubleshooting) weist darauf hin, dass obwohl Google Fonts den CORS-Header mit jeder Antwort sendet, einige Proxy-Server ihn entfernen können, bevor der Browser ihn zur Darstellung der Schriftart verwendet.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Zeitmessung von Ressourcen über verschiedene Ursprünge hinweg

Die [Resource Timing Level 1](https://www.w3.org/TR/resource-timing/) Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf vollständige Timing-Informationen für Ressourcen in einem Dokument zuzugreifen.

Der [Timing-Allow-Origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin)-Response-Header gibt Ursprünge an, die die Werte von Attributen sehen dürfen, die über Funktionen der Resource Timing API abgerufen werden, die andernfalls aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bedient wird oder wenn der Header den Ursprung nicht nach der Anforderung enthält, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlermeldungen/-seiten

Apache ermöglicht es Ihnen, je nach Art des Fehlers, den Benutzern benutzerdefinierte Fehlerseiten bereitzustellen.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webwege (relativ zum DocumentRoot) oder als vollständige URL beginnen, die der Client auflösen kann.

Siehe die [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) in der HTTPD-Dokumentation für weitere Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlerprävention

Diese Einstellung beeinträchtigt, wie `MultiViews` für das Verzeichnis, auf das die Konfiguration angewendet wird, funktioniert.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält und /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis, sucht nach Dateien namens foo.\* und erstellt effektiv eine Typ-Zuordnung, die all diese Dateien benennt, und weist ihnen die gleichen Medientypen und Inhaltscodierungen zu, die es hätte, wenn der Client eine von ihnen namentlich angefordert hätte. Der Server wählt dann die beste Übereinstimmung mit den Anforderungen des Clients aus.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das sich diese Konfiguration bezieht, und verhindert, dass Apache als Ergebnis einer Umschreibung einen 404-Fehler zurückgibt, wenn das gleichnamige Verzeichnis nicht existiert

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten mit dem Inhalt zu verknüpfen, der für eine HTTP-Antwort ausgewählt wurde, indem Muster in der URI oder Dateinamen auf die Metadatenwerte abgebildet werden.

Zum Beispiel definieren die Dateinamenerweiterungen von Inhaltsdateien oft den Internetmedientyp, die Sprache, den Zeichensatz und die Inhaltscodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten übermittelt, die diesen Inhalt enthalten, und werden bei der Inhaltsaushandlung verwendet, um Alternativen auszuwählen, sodass die Präferenzen des Benutzers respektiert werden, wenn eine Auswahl unter mehreren möglichen Inhalten getroffen wird.

**Ändern der Metadaten einer Datei ändert nicht den Wert des Last-Modified-Headers. Daher könnten bereits zwischengespeicherte Kopien immer noch von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Codierung) ändern, müssen Sie möglicherweise die betroffenen Dateien "berühren" (Änderung des zuletzt geänderten Datums), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen (alias MIME-Typen) bereitstellen

Verknüpft Medientypen mit einer oder mehreren Erweiterungen, um sicherzustellen, dass die Ressourcen korrekt bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben

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

## Standardzeichensatzattribut festlegen

Jeder Inhalt im Web hat einen Zeichensatz. Der Großteil, wenn nicht sogar aller Inhalt ist UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` gekennzeichneten Ressourcen mit dem `UTF-8`-Zeichensatz zu bedienen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Zeichensatz für bestimmte Medientypen festlegen

Bedient die folgenden Dateitypen mit dem `charset`-Parameter, der auf `UTF-8` gesetzt ist, unter Verwendung der [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Anweisung, die in `mod_mime` verfügbar ist.

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

## `Mod_rewrite` und die `RewriteEngine`-Anweisungen

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrücken zu ändern. Dies ermöglicht es Ihnen, beliebige URLs in Ihrer internen URL-Struktur auf jede gewünschte Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl von angehängten Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können je nach verschiedenen Tests durchgeführt werden: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Übereinstimmung zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster zur Aktivierung von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Aktivierung der Umschreibemotor (dies ist notwendig, damit die `RewriteRule`-Anweisungen funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) Dokumentation beschrieben
2. Aktivierung der `FollowSymLinks`-Option, falls sie nicht bereits aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options) Dokumentation
3. Wenn Ihr Webhost die `FollowSymLinks`-Option nicht zulässt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, aber beachten Sie die [Leistungsauswirkungen](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks)

   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` festlegen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Abhängig davon, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions) Anweisung verwenden, um einige Optionen für den Umschreibemotor zu aktivieren

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

Diese Umschreiberegeln leiten von der unsicheren Version `http://` zur sicheren Version der URL `https://` um, wie im [Apache HTTPD Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt die Validierung des Zertifikats fehl, wenn Validierungsanfragen auf HTTPS umgeleitet werden. Aktivieren Sie die benötigten Bedingung(en).

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

Diese Anweisungen ändern `www.example.com` zu `example.com`.

Sie sollten keinen doppelten Inhalt auf mehreren Ursprüngen (mit und ohne www) bereitstellen. Dies kann SEO-Probleme verursachen (doppelter Inhalt), und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzuzeigen, welche URL von Suchmaschinen durchsucht werden soll (wenn sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen so automatisch mit dem entsprechenden Schema (`http` oder `https`) umzuleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Weiterleitung verfügbar sind.

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

Diese Regeln fügen `www.` am Anfang einer URL ein. Es ist wichtig zu beachten, dass Sie niemals denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme verursachen (doppelter Inhalt), und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzuzeigen, welche URL von Suchmaschinen durchsucht werden soll.

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen so automatisch mit dem entsprechenden Schema (`http` or `https`) umzuleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Weiterleitung verfügbar sind. Wenn Ihr TLS-Zertifikat eines der während der Weiterleitung verwendeten Domänen nicht handhaben kann, sollten Sie die Bedingung einschalten.

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

## Rahmenoptionen

Das folgende Beispiel sendet den `X-Frame-Options`-Header mit dem Wert DENY, der Browser darüber informiert, den Inhalt der Webseite in keinem Rahmen anzuzeigen, um die Website vor [Clickjacking](/de/docs/Glossary/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten über [die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1): `SAMEORIGIN` und `ALLOW-FROM` lesen.

Während Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, besteht der potenzielle Nachteil darin, dass es selbst jede Einbettung Ihres Inhalts verbietet (z.B.: wenn Benutzer Ihre Website über eine Google Bildersuchergebnisseite besuchen).

Dennoch sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die es einem Benutzer ermöglichen, zustandsverändernde Operationen auszuführen (z.B.: Seiten, die Links für Käufe mit einem Klick, Checkout- oder Banküberweisungsbestätigungsseiten, Seiten, die dauerhafte Konfigurationsänderungen vornehmen, usw. enthalten).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site Scripting und anderen Inhaltseinschleusungsangriffen durch Setzen einer `Content Security Policy`, die vertrauenswürdige Quellen von Inhalten für Ihre Website erlaubt.

Es gibt keine Richtlinie, die für alle Websites passt. Das folgende Beispiel soll als Richtlinie dienen, die Sie für Ihre Seite modifizieren können.

Um die Implementierung Ihrer CSP zu erleichtern, können Sie einen Online [CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie beabsichtigen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Anweisung verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei in welchem Format auch immer haben, das der Server konfiguriert ist zu verwenden, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

Auf Macintosh- und Linux-Systemen beginnen Dateien, die mit einem Punkt beginnen, sind jedoch versteckt und nicht vom Zugriff ausgeschlossen, wenn Sie deren Namen und Standort kennen. Diese Arten von Dateien enthalten normalerweise Benutzerpräferenzen oder den Langzeitzustand eines Dienstprogramms und können eher private Orte beinhalten, wie z.B. die `.git`- oder `.svn`-Verzeichnisse.

Das Verzeichnis `.well-known/` repräsentiert [den Standardpfad (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) für "wohlbekannte Orte" (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf seinen sichtbaren Inhalt nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Backup- und Quelldateien, die möglicherweise von einigen Texteditoren übrig bleiben und ein Sicherheitsrisiko darstellen können, wenn jeder Zugang zu ihnen hat.

Aktualisieren Sie den `<FilesMatch>`-regulären Ausdruck im folgenden Beispiel, um alle Dateien einzuschließen, die auf Ihrem Produktionsserver enden und sensible Informationen über Ihre Website preisgeben können. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server ihn zur sicheren Version der Website umleitet, bleibt ein Fenster der Gelegenheit (die anfängliche HTTP-Verbindung) für einen Angreifer, die Anfrage herabzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Beachten Sie, dass Strict Transport Security nicht widerrufbar ist, und Sie müssen sicherstellen, dass die Seite für die Dauer, die Sie in der `max-age`-Anweisung angegeben haben, über HTTPS ausgeführt werden kann. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser die MIME-Art der Antwort erraten

1. Beschränkt alle Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem die `default-src`-Anweisung auf `'self'` gesetzt wird, was als Fallback für alle [Abruf-Anweisungen](/de/docs/Glossary/Fetch_directive) fungiert.

   - Dies ist praktisch, da Sie nicht alle Abruf-Anweisungen angeben müssen, die auf Ihre Seite zutreffen, z.B.: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self';` usw.
   - Diese Einschränkung bedeutet auch, dass Sie ausdrücklich definieren müssen, von welcher Site(s) Ihre Website Ressourcen laden darf. Andernfalls wird sie auf den gleichen Ursprung wie die die Anfrage stellende Seite beschränkt sein

2. Verhindert das `<base>`-Element auf der Website. Dies dient dazu, Angreifer daran zu hindern, die Standorte von Ressourcen zu ändern, die von relativen URLs geladen werden

   - Wenn Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`

3. Erlaubt nur die Formularübermittlungen vom aktuellen Ursprung mit: `form-action 'self'`
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb z.B. des `<iframe>`- oder `<object>`-Elements einbetten, indem: `frame-ancestors 'none'` gesetzt wird.

   - Die `frame-ancestors`-Anweisung hilft, [Clickjacking](/de/docs/Glossary/Clickjacking) Angriffe zu vermeiden und ist ähnlich wie der `X-Frame-Options`-Header
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP serviert werden, so behandelt, als ob sie sicher über HTTPS geladen wurden, indem die `upgrade-insecure-requests`-Anweisung gesetzt wird

   - **`upgrade-insecure-requests` stellt nicht sicher, dass die höherwertigen Navigation. Wenn Sie die Seite selbst über HTTPS erzwingen möchten, müssen Sie den `Strict-Transport-Security`-Header einschließen**

6. Bezieht den `Content-Security-Policy`-Header in alle Antworten ein, die in der Lage sind, Skripte auszuführen. Dazu gehören die häufig verwendeten Dateitypen: HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem "browsing context"-Modus ausführen können, werden sie hinzugefügt, um auf [Web-Worker](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers) abzuzielen

Einige ältere Browser würden versuchen, den Inhaltstyp einer Ressource zu erraten, selbst wenn sie auf der Serverkonfiguration nicht richtig eingestellt ist. Dies reduziert die Gefahr von Drive-by-Download-Angriffen und Cross-Origin-Datenauslaufen.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Policy

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind, andere Ressourcen anzufordern (oder zu ihnen zu navigieren).

Dies umfasst häufig verwendete Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Worker.

Um das Referrer-Auslaufen vollständig zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass sich die Auswirkungen negativ auf Analysedienste auswirken können.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## HTTP-TRACE-Methode deaktivieren

Die [TRACE](/de/docs/Web/HTTP/Methods/TRACE)-Methode, obwohl scheinbar harmlos, kann in einigen Szenarien erfolgreich eingesetzt werden, um die Anmeldeinformationen legitimer Benutzer zu stehlen. Siehe [Ein Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential)

Moderne Browser verhindern jetzt TRACE-Anfragen, die über JavaScript erfolgen, jedoch wurden andere Möglichkeiten entdeckt, TRACE-Anfragen mit Browsern zu senden, wie die Verwendung von Java.

Wenn Sie Zugang zur Hauptserverkonfigurationsdatei haben, verwenden Sie die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Anweisung anstelle.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Response-Headers

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. ihren Namen, Versionsnummer)

Dieser Header bietet keinen Mehrwert und in einigen Fällen kann die von ihm bereitgestellten Informationen Schwachstellen offenbaren

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf Sprache/Framework-Ebene deaktivieren (z.B.: für PHP können Sie das tun, indem Sie das folgende in `php.ini` festlegen.

```ini
expose_php = off;
```

## Entfernen des von Apache generierten Server-Informationen-Fußzeile

Verhindern, dass Apache eine Fußzeile mit Informationen über den Server zu servierenden Dokumenten hinzufügt (z.B.: Fehlermeldungen, Verzeichnislisten usw.). Siehe die [ServerSignature-Direktive](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Dokumentation für weitere Informationen darüber, was die Serversignatur bereitstellt, und die [ServerTokens-Direktive](https://httpd.apache.org/docs/current/mod/core.html#servertokens) für Informationen darüber, wie die Informationen in der Signatur bereitgestellt werden.

```apacheconf
ServerSignature Off
```

## Beheben von fehlerhaften `AcceptEncoding`-Headers

Einige Proxys und Sicherheitssoftware beschädigen oder entfernen den HTTP-Header `Accept-Encoding`. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detailliertere Erklärung.

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

Komprimiert alle mit einem der folgenden Medientypen gekennzeichneten Ausgaben mithilfe der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Erweiterungen zu Medientypen zuordnen

Ordnen Sie die folgenden Dateinamenerweiterungen einem spezifizierten Codierungstyp mit der [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, sodass Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Response-Header bedienen kann (dies lässt Apache sie NICHT komprimieren!). Wenn diese Dateitypen ohne einen geeigneten `Content-Encoding`-Response-Header bedient würden, wüssten Client-Anwendungen (z.B. Browser) nicht, dass sie zuerst die Antwort dekomprimieren müssen und könnten den Inhalt daher nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauffrist

Bedienen Sie Ressourcen mit einem weit in der Zukunft liegendem Ablaufdatum mit dem [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Modul sowie `Cache-Control` und `Expires` Headern.

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
