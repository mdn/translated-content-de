---
title: "Apache-Konfiguration: .htaccess"
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers, den sie kontrollieren, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptserver-Konfigurationsdatei haben (die üblicherweise `httpd.conf` genannt wird), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) in der Apache HTTPD-Dokumentationsseite für weitere Details darüber, was .htaccess-Dateien tun können.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen behandeln, die Sie zu `.htaccess` hinzufügen können und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen innerhalb des Blocks nur dann auszuführen, wenn das entsprechende Modul korrekt konfiguriert wurde und der Server es geladen hat. Auf diese Weise verhindern wir, dass unser Server abstürzt, wenn das Modul nicht geladen wurde.

## Umleitungen

Es gibt Zeiten, wenn wir Benutzern mitteilen müssen, dass eine Ressource entweder vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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

Die möglichen Werte für den ersten Parameter sind unten aufgeführt. Wenn der erste Parameter nicht enthalten ist, ist `temp` der Standardwert.

- permanent
  - : Gibt einen dauerhaften Umleitungsstatus (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen vorübergehenden Umleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Cross-Origin-Ressourcen

Der erste Satz von Direktiven steuert den [CORS](https://fetch.spec.whatwg.org/)-Zugriff (Cross-Origin Resource Sharing) auf Ressourcen vom Server. CORS ist ein HTTP-Header-basiertes Mechanismus, das es einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, welche ein Browser erlauben soll, um Ressourcen zu laden.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel befolgen XMLHttpRequest und die Fetch-API die gleiche Ursprungsrichtlinie. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von demselben Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines Verzeichnisses unterhalb der Stelle, an der Sie diese gesetzt haben, überschreiben, werden alle Anfragen von externen Servern honoriert, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative ist, explizit anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Website haben. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigt haben.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Allowing cross-origin use of images and canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann es zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut in den Bildern verwenden, die Sie anfordern, und den folgenden Code-Schnipsel in Ihrer `.htaccess`, um den CORS-Header vom Server zu setzen.

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

Der [Google Fonts-Troubleshooting-Guide](https://developers.google.com/fonts/docs/troubleshooting) von Google Chrome informiert uns, dass, während Google Fonts möglicherweise den CORS-Header mit jeder Antwort sendet, einige Proxy-Server ihn abstreifen könnten, bevor der Browser ihn verwenden kann, um die Schriftart zu rendern.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin-Ressourcen-Timing

Die Spezifikation [Resource Timing Level 1](https://www.w3.org/TR/resource-timing/) definiert eine Schnittstelle für Webanwendungen, um auf die vollständigen Timing-Informationen für Ressourcen in einem Dokument zuzugreifen.

Der [Timing-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwort-Header gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der Resource Timing API abgerufen wurden und die sonst aufgrund von Cross-Origin-Einschränkungen als null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header nach der Anforderung den Ursprung nicht einschließt, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/-meldungen

Apache erlaubt es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, abhängig von der Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Weitere Informationen finden Sie in der Dokumentation zur [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationsseite.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie `MultiViews` für das Verzeichnis, auf das sich die Konfiguration bezieht, funktioniert.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis auf der Suche nach Dateien namens foo.\*, und simuliert effektiv eine Typenkarte, die all diese Dateien benennt, wobei ihnen die gleichen Medientypen und Inhaltskodierungen zugewiesen werden, die sie hätte, wenn der Client explizit nach einem dieser Dateien benannt hätte. Der Server wählt dann die beste Übereinstimmung mit den Anforderungen des Clients.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das sich diese Konfiguration bezieht, und verhindert, dass Apache einen 404-Fehler als Ergebnis einer Umschreibung zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichenkodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten dem für eine HTTP-Antwort ausgewählten Inhalt zuzuweisen, indem Muster in der URI oder Dateinamen den Metadatenwerten zugeordnet werden.

Zum Beispiel definieren die Dateinamenserweiterungen von Inhaltsdateien oft den Internetmedientyp des Inhalts, die Sprache, den Zeichensatz und die Inhaltskodierung. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten und in der Inhaltsverhandlung verwendet werden, wenn Alternativen ausgewählt werden, sodass die Vorlieben des Benutzers respektiert werden, wenn einer von mehreren möglichen Inhalten bereitgestellt wird.

**Das Ändern der Metadaten für eine Datei ändert nicht den Wert des Last-Modified-Headers. Daher können möglicherweise noch zwischengespeicherte Kopien von einem Client oder Proxy mit den vorherigen Headern verwendet werden. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Kodierung) ändern, müssen Sie möglicherweise die betroffenen Dateien „anpassen“ (zuletzt geändert-Datum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen bereitstellen (auch bekannt als MIME-Typen)

Ordnet Medientypen einer oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen angemessen bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen wie im [HTML-Spezifikationsdokument](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben verwenden.

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

## Das Standardzeichenattribut festlegen

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle Inhalte, sind UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` gekennzeichneten Ressourcen mit dem `UTF-8`-Zeichensatz bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Den Zeichensatz für spezifische Medientypen festlegen

Bedienen Sie die folgenden Dateitypen mit dem `charset`-Parameter auf `UTF-8` gesetzt, indem Sie die [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive verwenden, die in `mod_mime` verfügbar ist.

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu ändern. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und unbegrenzte Anzahl angehängter Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken Mechanismus zur URL-Manipulation bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbanksuchanfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Übereinstimmung zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster, um `mod_rewrite` zu aktivieren, ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Schalten Sie die Rewrite-Engine ein (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der Dokumentation zur [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) beschrieben.
2. Aktivieren Sie die Option `FollowSymLinks`, falls diese nicht bereits aktiviert ist. Siehe Dokumentation zu [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options).
3. Wenn Ihr Webhost nicht die Option `FollowSymlinks` erlaubt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` einkommentieren, dabei aber die [Leistungsbeeinträchtigung](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks) beachten.

   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` setzen.
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase).
   - Abhängig von der Konfiguration Ihres Servers müssen Sie möglicherweise auch die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren.

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

Diese Rewrite-Regeln werden die unsichere Version `http://` zur sicheren Version `https://` der URL umleiten, wie im [Apache HTTPD-Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt-Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt es fehl, das Zertifikat zu validieren, wenn Validierungsanforderungen zu HTTPS umgeleitet werden. Schalten Sie die benötigten Bedingung(en) ein.

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

### Umleiten von `www.` URLs

Diese Direktiven werden `www.example.com` zu `example.com` umschreiben.

Sie sollten keine Inhalte auf mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann SEO-Probleme (doppelte Inhalte) verursachen, und deshalb sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL von Suchmaschinen durchsucht werden sollen (wenn sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen automatisch mit dem entsprechenden Schema (`http` oder `https`) weiterzuleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen zur Weiterleitung verfügbar sind.

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

Dies kann SEO-Probleme (doppelte Inhalte) verursachen, und deshalb sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL von Suchmaschinen durchsucht werden sollen.

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen automatisch mit dem entsprechenden Schema (`http` oder `https`) weiterzuleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen zur Weiterleitung verfügbar sind. Wenn Ihr TLS-Zertifikat keines der während der Weiterleitung verwendeten Domains verarbeiten kann, sollten Sie die Bedingung aktivieren.

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

Das folgende Beispiel sendet den `X-Frame-Options`-Antwort-Header mit dem Wert DENY, was den Browsern mitteilt, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Website gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten [über die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1): `SAMEORIGIN` und `ALLOW-FROM` lesen.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass es jegliches Rahmen Ihrer Inhalte untersagt (z.B.: wenn Benutzer Ihre Website über eine Google-Bildersuche-Ergebnisseite besuchen).

Nichtsdestotrotz sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die es einem Benutzer ermöglichen, eine zustandsverändernde Operation durchzuführen (z.B. Seiten, die Ein-Klick-Kauf-Links, Checkout- oder Banküberweisungsbestätigungsseiten enthalten, Seiten, die dauerhafte Konfigurationsänderungen vornehmen, usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) verringert das Risiko von Cross-Site-Scripting und anderen Inhaltseinschleusungsangriffen, indem eine `Content Security Policy` festgelegt wird, die vertrauenswürdige Quellen von Inhalten für Ihre Website erlaubt.

Es gibt keine Politik, die für alle Websites passt, das folgende Beispiel dient als Leitfaden für Sie, um es für Ihre Website anzupassen.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie möchten.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichnisezugang

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei im Format enthalten, das der Server zu verwenden konfiguriert ist, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, vor dem Zugriff verborgen, aber nicht vor Zugriff, wenn Sie ihren Namen und Standort kennen. Diese Art von Dateien enthalten normalerweise Benutzereinstellungen oder den gesicherten Zustand eines Dienstprogramms und können ziemlich private Orte enthalten, wie zum Beispiel die `.git` oder `.svn` Verzeichnisse.

Das `.well-known/` Verzeichnis repräsentiert [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfadpräfix für "wohlbekannte Orte" (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), weshalb der Zugriff auf seinen sichtbaren Inhalt nicht blockiert werden sollte.

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

Blockieren Sie den Zugriff auf Backup- und Quelldateien, die von einigen Texteditoren verbleiben können und ein Sicherheitsrisiko darstellen können, wenn jemand Zugriff auf sie hat.

Aktualisieren Sie den regulären Ausdruck `<FilesMatch>` im folgenden Beispiel, um alle Dateien einzuschließen, die auf Ihrem Produktionsserver enden und sensible Informationen über Ihre Website preisgeben können. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server ihn auf die sichere Version der Website umleitet, bleibt ein Zeitfenster (die initiale HTTP-Verbindung) für einen Angreifer, um die Anfrage herabzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in der Adressleiste des Browsers eingeben.

Seien Sie sich bewusst, dass Strict Transport Security nicht widerrufbar ist, und Sie müssen sicherstellen, dass Sie in der Lage sind, die Seite über HTTPS so lange zu bedienen, wie Sie es in der `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser die Antwort MIME-Sniffen

1. Beschränkt alle Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem die Direktive `default-src` auf `'self'` gesetzt wird - die als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}} wirkt.

   - Dies ist bequem, da Sie nicht alle Fetch-Direktiven angeben müssen, die für Ihre Website gelten, zum Beispiel: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, etc.
   - Diese Einschränkung bedeutet auch, dass Sie ausdrücklich definieren müssen, von welcher(n) Site(s) Ihre Website Ressourcen laden darf. Andernfalls ist sie auf denselben Ursprung wie die Seite beschränkt, die die Anfrage stellt.

2. Verhindert die Verwendung des `<base>`-Elements auf der Website. Dies soll verhindern, dass Angreifer die Standorte von Ressourcen ändern, die von relativen URLs geladen werden.

   - Wenn Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`.

3. Erlaubt nur Formulareinreichungen vom aktuellen Ursprung mit: `form-action 'self'`.
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb von z.B. dem `<iframe>` oder `<object>`-Element einbetten, indem: `frame-ancestors 'none'` gesetzt wird.

   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden und ist dem `X-Frame-Options`-Header ähnlich.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist.

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP bereitgestellt werden, so behandelt, als wären sie sicher über HTTPS geladen, indem die Direktive `upgrade-insecure-requests` gesetzt wird.

   - **`upgrade-insecure-requests` stellt nicht sicher, dass die oberste Navigation über HTTPS erfolgt. Wenn Sie erzwingen möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen.**

6. Enthält den `Content-Security-Policy`-Header in allen Antworten, die in der Lage sind, Skripting auszuführen. Dazu gehören die häufig verwendeten Dateitypen: HTML, XML und PDF-Dokumente. Obwohl JavaScript-Dateien kein Skript in einem "Browsing-Kontext" ausführen können, sind sie enthalten, um [Web Workers](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) anzusprechen.

Einige ältere Browser würden versuchen, den Inhaltstyp einer Ressource zu erraten, selbst wenn er nicht ordnungsgemäß in der Serverkonfiguration eingerichtet ist. Dies verringert die Exposition gegenüber Drive-by-Download-Angriffen und Cross-Origin-Datendiebstahl.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind, andere Ressourcen anzufordern (oder zu navigieren).

Dies umfasst die häufig verwendeten Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Arbeiter.

Um die Referrer-Leckage vollständig zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass der Effekt sich negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die unten aufgeführten, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## HTTP-Methode `TRACE` deaktivieren

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode, obwohl scheinbar harmlos, kann in einigen Fällen erfolgreich verwendet werden, um die Anmeldedaten legitimer Benutzer zu stehlen. Siehe [A Cross-Site Tracing (XST) attack](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern nun TRACE-Anfragen, die über JavaScript gesendet werden, jedoch wurden andere Möglichkeiten entdeckt, TRACE-Anfragen mit Browsern zu senden, wie zum Beispiel mit Java.

Wenn Sie Zugriff auf die Hauptserver-Konfigurationsdatei haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Antwort-Headers

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B., ihren Namen, Versionsnummer).

Dieser Header bietet keinen Wert, und in einigen Fällen können die Informationen, die er bereitstellt, Schwachstellen offenlegen.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf der Ebene der Sprache/des Frameworks deaktivieren (z.B.: für PHP können Sie das tun, indem Sie das Folgende in `php.ini` einstellen.

```ini
expose_php = off;
```

## Entfernen der Apache-generierten Serverinformation in der Fußzeile

Verhindern Sie, dass Apache eine abschließende Fußzeilenzeile mit Informationen über den Server zu von Server generierten Dokumenten hinzufügt (z.B.: Fehlermeldungen, Verzeichnislisten, usw.). Siehe die [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Dokumentation für weitere Informationen darüber, was die Serversignatur bereitstellt, und die [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens)-Dokumentation für Informationen zur Konfiguration der in der Signatur bereitgestellten Informationen.

```apacheconf
ServerSignature Off
```

## Beheben von fehlerhaften `AcceptEncoding`-Headers

Einige Proxies und Sicherheitssoftware manipulieren oder entfernen den `Accept-Encoding` HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detailliertere Erklärung.

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

Komprimieren Sie alle Ausgaben, die mit einem der folgenden Medientypen markiert sind, mit der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

Ordnen Sie die folgenden Dateinamenerweiterungen dem angegebenen Codierungstyp mit [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem geeigneten `Content-Encoding`-Antwort-Header bedienen kann (dies wird Apache NICHT dazu bringen, sie zu komprimieren!). Wenn diese Dateitypen ohne einen geeigneten `Content-Encoding`-Antwort-Header bedient würden, wüssten Client-Anwendungen (z.B. Browser) nicht, dass sie die Antwort zuerst dekomprimieren müssten, und könnten daher den Inhalt nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Bedienen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum mit dem [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) Modul und den [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires) Headern.

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
