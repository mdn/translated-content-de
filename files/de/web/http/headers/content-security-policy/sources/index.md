---
title: CSP-Quellwerte
slug: Web/HTTP/Headers/Content-Security-Policy/Sources
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)-Header-Direktiven, die eine `<source>` angeben, von der Ressourcen geladen werden dürfen, können jeden der unten aufgeführten Werte verwenden. Relevante Direktiven umfassen die [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) sowie andere [unten aufgeführte](#relevante_direktiven).

## Quellen

- `<host-source>`

  - : Internet-Host nach Name oder IP-Adresse. Das [URL-Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), die Portnummer und der Pfad sind optional.
    Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was bedeutet, dass alle zulässigen Werte von jedem gültig sind.
    Beim Abgleichen von Schemas sind sichere Upgrades erlaubt (z.B. entspricht `http://example.com` auch `https://example.com`).
    Beispiele:

    - `http://*.example.com`: Entspricht allen Versuchen, von einer beliebigen Subdomain von example.com zu laden. Entspricht auch `https`-Ressourcen.
    - `mail.example.com:443`: Entspricht allen Versuchen, von Port 443 auf mail.example.com zu laden.
    - `https://store.example.com`: Entspricht allen Versuchen, auf store.example.com mit `https:` zuzugreifen.
    - `*.example.com`: Entspricht allen Versuchen, von einer beliebigen Subdomain von example.com zu laden.
    - `https://*.example.com:12/path/to/file.js`: Entspricht allen Versuchen, von einer beliebigen Subdomain von example.com mit `https:` auf Port 12 zu laden, und nur, wenn der Pfad `/path/to/file.js` ist.
    - `ws://example.com`: Entspricht allen Versuchen, von example.com mit `ws:` zu laden. Entspricht auch `wss`-Ressourcen.
    - `https://example.com/subdirectory`: Entspricht allen Versuchen, den genauen Pfad `https://example.com/subdirectory` zu laden.
    - `https://example.com/subdirectory/`: Entspricht allen Versuchen, Dateien im Verzeichnis `subdirectory` zu laden. Zum Beispiel `https://example.com/subdirectory/path/to/file.js`. Entspricht nicht `https://example.com/path/to/file.js`.

    Weitere Einzelheiten zur Pfadabgleichung finden Sie in den [Parts Matching Algorithms](https://w3c.github.io/webappsec-csp/#match-schemes) in der Spezifikation.

- `<scheme-source>`

  - : Ein Schema wie `http:` oder `https:`.
    Der Doppelpunkt ist erforderlich.
    Im Gegensatz zu den anderen untenstehenden Werten sollten keine Anführungszeichen verwendet werden.
    Sie können auch Datenschemas angeben (nicht empfohlen).

    - `data:` Erlaubt die Verwendung von [`data:`-URLs](/de/docs/Web/URI/Schemes/data).
      _Dies ist unsicher; ein Angreifer kann auch beliebige `data:`-URLs einfügen. Verwenden Sie dies sparsam und definitiv nicht für Skripte._
    - `mediastream:` Erlaubt die Verwendung von [`mediastream:`-URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle.
    - `blob:` Erlaubt die Verwendung von [`blob:`-URIs](/de/docs/Web/API/Blob) als Inhaltsquelle.
    - `filesystem:` Erlaubt die Verwendung von [`filesystem:`-URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle.

    > [!NOTE]
    > Wenn eine Schemaquelle fehlt, wird das Schema des Ursprungsdokuments verwendet.
    > Sichere Upgrades sind erlaubt, sodass `https:` geladen, dann `example.com` `https://example.com` entspricht, jedoch nicht `http://example.com`.
    > Weitere Informationen finden Sie unter [CSP Level 3](https://www.w3.org/TR/CSP3/#match-url-to-source-list).

- `'self'`
  - : Bezieht sich auf den Ursprung, von dem das geschützte Dokument bereitgestellt wird, einschließlich des gleichen URL-Schemas und der Portnummer.
    Sie müssen die einfachen Anführungszeichen einschließen. Einige Browser schließen explizit `blob` und `filesystem` von den Quellen-Direktiven aus.
    Websites, die diese Inhaltstypen zulassen müssen, können sie mit dem Datenschema angeben.
- `'unsafe-eval'`
  - : Ermöglicht die Verwendung von `eval()` und anderen unsicheren Methoden zur Codeerstellung aus Zeichenfolgen.
    Sie müssen die einfachen Anführungszeichen einschließen.
- `'wasm-unsafe-eval'`
  - : Ermöglicht das Laden und Ausführen von WebAssembly-Modulen, ohne dass auch unsichere JavaScript-Ausführung über `'unsafe-eval'` erlaubt werden muss.
    Die einfachen Anführungszeichen sind erforderlich.
- `'unsafe-hashes'`
  - : Ermöglicht das Aktivieren spezifischer Inline-[Event-Handler](/de/docs/Web/Events/Event_handlers).
    Wenn Sie nur Inline-Event-Handler zulassen müssen und keine Inline-{{HTMLElement("script")}}-Elemente oder [`javascript:`-URLs](/de/docs/Web/URI/Schemes/javascript), ist dies eine sicherere Methode als die Verwendung des Ausdrucks `unsafe-inline`.
- `'unsafe-inline'`
  - : Erlaubt die Verwendung von Inline-Ressourcen, wie z.B. Inline-{{HTMLElement("script")}}-Elemente, [`javascript:`-URLs](/de/docs/Web/URI/Schemes/javascript), Inline-Event-Handler und Inline-{{HTMLElement("style")}}-Elemente.
    Die einfachen Anführungszeichen sind erforderlich.
- `'none'`
  - : Bezieht sich auf die leere Menge; das heißt, keine URLs entsprechen.
    Die einfachen Anführungszeichen sind erforderlich.
- `'nonce-<base64-value>'`

  - : Eine Erlauben-Liste für spezifische Inline-Skripte mit einem kryptographischen Nonce (ein Einmalwert).
    Der Server muss einen einzigartigen Nonce-Wert erzeugen, jedes Mal wenn er eine Richtlinie überträgt.
    Es ist entscheidend, ein Unvorhersehbares Nonce zu bereitstellen, da das Umgehen einer Ressourcenrichtlinie sonst trivial ist.
    Für ein Beispiel siehe [unsafe inline script](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
    Die Angabe des Nonce lässt einen modernen Browser `'unsafe-inline'` ignorieren, was immer noch für ältere Browser ohne Nonce-Unterstützung gesetzt sein könnte.

    > [!NOTE]
    > Die CSP-`nonce`-Quelle kann nur auf _noncefähige_ Elemente angewendet werden (da z.B. das {{HTMLElement("img")}}-Element kein `nonce`-Attribut hat, gibt es keine Möglichkeit, es dieser CSP-Quelle zuzuordnen).

- `'<hash-algorithm>-<base64-value>'`
  - : Ein sha256-, sha384- oder sha512-Hash von Skripten oder Styles.
    Dieser Wert besteht aus dem Algorithmus, der zur Erstellung des Hashes verwendet wird, gefolgt von einem Bindestrich und dem base64-codierten Hash des Skripts oder Styles.
    Beim Generieren des Hashes schließen Sie `<script>`- oder `<style>`-Tags aus und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.
    In CSP 2.0 können Hash-Quellen auf Inline-Skripte und -Styles angewendet werden. Hash-Quellen-Ausdrücke sind in [CSP 3.0](https://www.w3.org/TR/CSP3/#external-hash) für externe Skripte in `script-src`-Direktiven erlaubt.
    Weitere Informationen und Beispiele finden Sie auf den Seiten [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) und [style-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles).
- `'strict-dynamic'`
  - : Der `strict-dynamic`-Quellenausdruck gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript gegeben wird, indem es mit einem Nonce oder einem Hash begleitet wird, auf alle von diesem Wurzelskript geladenen Skripte propagiert werden soll.
    Gleichzeitig werden alle Erlauben-Listen oder Quellenausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.
    Siehe [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) für ein Beispiel.
- `'report-sample'`
  - : Erfordert, dass ein Beispiel des verletzenden Codes in den Verstoßbericht aufgenommen wird.
- `'inline-speculation-rules'`
  - : Erlaubt die Aufnahme von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

## Spezifikationen

{{Specifications}}

## Relevante Direktiven

Direktiven, für die die obigen Quellen gelten, umfassen:

- [Fetch-Direktiven](/de/docs/Glossary/fetch_directive):

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

- [Dokument-Direktiven](/de/docs/Glossary/Document_directive):

  - {{CSP("base-uri")}}
  - {{CSP("sandbox")}}

- [Navigations-Direktiven](/de/docs/Glossary/Navigation_directive):

  - {{CSP("form-action")}}
  - {{CSP("frame-ancestors")}}
