---
title: CSP-Quellenwerte
slug: Web/HTTP/Headers/Content-Security-Policy/Sources
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)-Header-Direktiven, die eine `<source>` angeben, von der Ressourcen geladen werden können, können einen der unten aufgeführten Werte verwenden. Relevante Direktiven umfassen die {{Glossary("fetch directive", "fetch directives")}}, zusammen mit anderen [unten aufgeführten](#relevante_direktiven).

## Quellen

- `<host-source>`

  - : Internet-Host nach Name oder IP-Adresse. Das [URL-Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), die Portnummer und der Pfad sind optional.
    Platzhalter (`'*'`) können für Subdomains, Hostadresse und Portnummer verwendet werden und bedeuten, dass alle legalen Werte jedes dieser Teile gültig sind.
    Beim Abgleichen von Schemas sind sichere Upgrades erlaubt (z. B. wird `http://example.com` auf `https://example.com` abgleichen).
    Beispiele:

    - `http://*.example.com`: Passt auf alle Versuche, von einer Subdomain von example.com zu laden. Passt auch auf `https`-Ressourcen.
    - `mail.example.com:443`: Passt auf alle Versuche, von Port 443 auf mail.example.com zu laden.
    - `https://store.example.com`: Passt auf alle Versuche, store.example.com mittels `https:` zu erreichen.
    - `*.example.com`: Passt auf alle Versuche, von irgendeiner Subdomain von example.com zu laden.
    - `https://*.example.com:12/path/to/file.js`: Passt auf alle Versuche, von irgendeiner Subdomain von example.com mittels `https:` auf Port 12 zu laden, und nur wenn der Pfad `/path/to/file.js` ist.
    - `ws://example.com`: Passt auf alle Versuche, von example.com mittels `ws:` zu laden. Passt auch auf `wss`-Ressourcen.
    - `https://example.com/subdirectory`: Passt auf alle Versuche, den genauen Pfad `https://example.com/subdirectory` zu laden.
    - `https://example.com/subdirectory/`: Passt auf alle Versuche, Dateien im Verzeichnis `subdirectory` zu laden. Zum Beispiel `https://example.com/subdirectory/path/to/file.js`. Es passt nicht auf `https://example.com/path/to/file.js`.

    Für weitere Details darüber, wie das Pfad-Abgleichen funktioniert, lesen Sie die [Teile-Abgleichs-Algorithmen](https://w3c.github.io/webappsec-csp/#match-schemes) in der Spezifikation.

- `<scheme-source>`

  - : Ein Schema wie `http:` oder `https:`.
    Der Doppelpunkt ist erforderlich.
    Anders als bei anderen untenstehenden Werten sollten keine einfachen Anführungszeichen verwendet werden.
    Sie können auch Datenschemas angeben (nicht empfohlen).

    - `data:` Erlaubt [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquelle.
      _Dies ist unsicher; ein Angreifer kann auch beliebige `data:` URLs einschleusen. Nutzen Sie dies sparsam und definitiv nicht für Skripte._
    - `mediastream:` Erlaubt [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle.
    - `blob:` Erlaubt [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquelle.
    - `filesystem:` Erlaubt [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle.

    > [!NOTE]
    > Wenn eine Schemenquelle fehlt, wird das Schema der Dokumentquelle verwendet.
    > Sichere Upgrades sind erlaubt, sodass, wenn das Dokument mittels `https:` geladen wird, dann `example.com` auf `https://example.com`, aber nicht auf `http://example.com` passen wird.
    > Für weitere Informationen siehe [CSP Level 3](https://www.w3.org/TR/CSP3/#match-url-to-source-list).

- `'self'`
  - : Bezieht sich auf die Quelle, von der das geschützte Dokument bereitgestellt wird, einschließlich des gleichen URL-Schemas und der Portnummer.
    Die einfachen Anführungszeichen müssen enthalten sein. Einige Browser schließen speziell `blob` und `filesystem` aus Quellendirektiven aus.
    Websites, die diese Inhaltstypen zulassen müssen, können sie mit dem Data-Attribut spezifizieren.
- `'unsafe-eval'`
  - : Erlaubt die Verwendung von `eval()` und anderen unsicheren Methoden zur Erstellung von Code aus Zeichenfolgen.
    Die einfachen Anführungszeichen müssen enthalten sein.
- `'wasm-unsafe-eval'`
  - : Erlaubt das Laden und Ausführen von WebAssembly-Modulen, ohne auch unsichere JavaScript-Ausführung über `'unsafe-eval'` zuzulassen.
    Die einfachen Anführungszeichen sind erforderlich.
- `'unsafe-hashes'`
  - : Erlaubt das Aktivieren spezifischer inline [Ereignishandler](/de/docs/Web/Events/Event_handlers).
    Wenn Sie nur inline Ereignishandler und nicht inline {{HTMLElement("script")}}-Elemente oder [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript) erlauben müssen, ist dies eine sicherere Methode als die Verwendung des `unsafe-inline`-Ausdrucks.
- `'unsafe-inline'`
  - : Erlaubt die Verwendung inline Ressourcen wie inline {{HTMLElement("script")}}-Elemente, [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript), inline Ereignishandler und inline {{HTMLElement("style")}}-Elemente.
    Die einfachen Anführungszeichen sind erforderlich.
- `'none'`
  - : Bezieht sich auf die leere Menge; das heißt, es sind keine URLs passend.
    Die einfachen Anführungszeichen sind erforderlich.
- `'nonce-<base64-value>'`

  - : Eine Zulassungsliste für spezielle inline Skripte unter Verwendung einer kryptografischen Nonce (zufällig verwendete Zahl).
    Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren.
    Es ist von entscheidender Bedeutung, eine nicht zu erratende Nonce bereitzustellen, da das Umgehen einer Ressourcenrichtlinie ansonsten trivial ist.
    Siehe [unsicheres inline Skript](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) für ein Beispiel.
    Die Angabe von Nonce lässt einen modernen Browser `'unsafe-inline'` ignorieren, was noch für ältere Browser ohne Nonce-Unterstützung festgelegt sein könnte.

    > [!NOTE]
    > Die CSP `nonce` Quelle kann nur auf _noncebare_ Elemente angewendet werden (z. B. da das {{HTMLElement("img")}}-Element kein `nonce`-Attribut hat, gibt es keine Möglichkeit, es mit dieser CSP-Quelle zu verknüpfen).

- `'<hash-algorithm>-<base64-value>'`
  - : Ein sha256, sha384 oder sha512 Hash von Skripten oder Stilen.
    Dieser Wert besteht aus dem Algorithmus, der verwendet wurde, um den Hash zu erstellen, gefolgt von einem Bindestrich und dem base64-kodierten Hash des Skripts oder Stils.
    Beim Erstellen des Hashs, schließen Sie \<script> oder \<style> Tags aus und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen, einschließlich führender oder nachstehender Leerzeichen, von Bedeutung sind.
    In CSP 2.0 können Hash-Quellen auf inline Skripte und Stile angewendet werden. Hash-Quellen-Ausdrücke sind in [CSP 3.0](https://www.w3.org/TR/CSP3/#external-hash) für externe Skripte in `script-src`-Direktiven erlaubt.
    Für mehr Informationen und Beispiele sehen Sie die Seiten [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) und [style-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles).
- `'strict-dynamic'`
  - : Der `strict-dynamic`-Quellenausdruck gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript ausdrücklich gegeben wird, indem es von einer Nonce oder einem Hash begleitet wird, auf alle von diesem Wurzelskript geladenen Skripte übertragen wird.
    Gleichzeitig werden alle Zulassungs- oder Quellenausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.
    Siehe [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) für ein Beispiel.
- `'report-sample'`
  - : Erfordert, dass ein Muster des verletzenden Codes im Verstoßbericht enthalten ist.
- `'inline-speculation-rules'`
  - : Erlaubt das Einfügen von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

## Spezifikationen

{{Specifications}}

## Relevante Direktiven

Direktiven, für die die obigen Quellen gelten, umfassen:

- {{Glossary("fetch directive", "Fetch directives")}}:

  - {{CSP("default-src")}}
  - {{CSP("child-src")}}
  - {{CSP("connect-src")}}
  - {{CSP("font-src")}}
  - {{CSP("frame-src")}}
  - {{CSP("img-src")}}
  - {{CSP("manifest-src")}}
  - {{CSP("media-src")}}
  - {{CSP("object-src")}}
  - {{CSP("prefetch-src")}}
  - {{CSP("script-src")}}
  - {{CSP("script-src-elem")}}
  - {{CSP("script-src-attr")}}
  - {{CSP("style-src")}}
  - {{CSP("style-src-elem")}}
  - {{CSP("style-src-attr")}}
  - {{CSP("worker-src")}}

- {{Glossary("Document directive", "Document directives")}}:

  - {{CSP("base-uri")}}
  - {{CSP("sandbox")}}

- {{Glossary("Navigation directive", "Navigation directives")}}:

  - {{CSP("form-action")}}
  - {{CSP("frame-ancestors")}}
