---
title: CSP-Quellwerte
slug: Web/HTTP/Headers/Content-Security-Policy/Sources
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTTPSidebar}}

HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)-Header-Direktiven, die eine `<source>` spezifizieren, von der Ressourcen geladen werden dürfen, können einen der unten aufgeführten Werte verwenden. Relevante Direktiven beinhalten die {{Glossary("fetch directive", "Abrufrichtlinien")}}, zusammen mit anderen [unten aufgeführten](#relevante_direktiven).

## Quellen

- `<host-source>`

  - : Internet-Host durch Name oder IP-Adresse. Das [URL-Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), die Portnummer und der Pfad sind optional.
    Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was bedeutet, dass alle gültigen Werte jeweils gültig sind.
    Beim Abgleichen von Schemas sind sichere Upgrades erlaubt (z.B. wird `http://example.com` mit `https://example.com` übereinstimmen).
    Beispiele:

    - `http://*.example.com`: Stimmt mit allen Versuchen überein, von einer beliebigen Subdomain von example.com zu laden. Stimmt auch mit `https`-Ressourcen überein.
    - `mail.example.com:443`: Stimmt mit allen Versuchen überein, von Port 443 auf mail.example.com zu laden.
    - `https://store.example.com`: Stimmt mit allen Versuchen überein, store.example.com mit `https:` zuzugreifen.
    - `*.example.com`: Stimmt mit allen Versuchen überein, von einer beliebigen Subdomain von example.com zu laden.
    - `https://*.example.com:12/path/to/file.js`: Stimmt mit allen Versuchen überein, von einer beliebigen Subdomain von example.com mit `https:` auf Port 12 zu laden, und nur, wenn der Pfad `/path/to/file.js` lautet.
    - `ws://example.com`: Stimmt mit allen Versuchen überein, von example.com mit `ws:` zu laden. Stimmt auch mit `wss`-Ressourcen überein.
    - `https://example.com/subdirectory`: Stimmt mit allen Versuchen überein, den exakten Pfad `https://example.com/subdirectory` zu laden.
    - `https://example.com/subdirectory/`: Stimmt mit allen Versuchen überein, Dateien im Verzeichnis `subdirectory` zu laden. Zum Beispiel, `https://example.com/subdirectory/path/to/file.js`. Es stimmt nicht mit `https://example.com/path/to/file.js` überein.

    Für weitere Details, wie die Pfad-Übereinstimmung erfolgt, verweisen Sie bitte auf die [Matching-Algorithmen](https://w3c.github.io/webappsec-csp/#match-schemes) in der Spezifikation.

- `<scheme-source>`

  - : Ein Schema wie `http:` oder `https:`.
    Der Doppelpunkt ist erforderlich.
    Im Gegensatz zu anderen Werten sollten keine einfachen Anführungszeichen verwendet werden.
    Sie können auch Datenschemas angeben (nicht empfohlen).

    - `data:` Ermöglicht [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquelle.
      _Dies ist unsicher; ein Angreifer kann auch beliebige `data:`-URLs injizieren. Verwenden Sie dies sparsam und keinesfalls für Skripte._
    - `mediastream:` Ermöglicht [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle.
    - `blob:` Ermöglicht [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquelle.
    - `filesystem:` Ermöglicht [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle.

    > [!NOTE]
    > Wenn eine Schemaquelle fehlt, wird das Schema des Dokumentursprungs verwendet.
    > Sichere Upgrades sind erlaubt, sodass, wenn das Dokument über `https:` geladen wird, `example.com` mit `https://example.com` übereinstimmt, aber nicht mit `http://example.com`.
    > Weitere Informationen finden Sie unter [CSP Level 3](https://www.w3.org/TR/CSP3/#match-url-to-source-list).

- `'self'`
  - : Bezieht sich auf den Ursprung, von dem das geschützte Dokument bereitgestellt wird, einschließlich des gleichen URL-Schemas und der Portnummer.
    Sie müssen die einfachen Anführungszeichen einschließen. Einige Browser schließen `blob` und `filesystem` spezifisch aus den Quelldirektiven aus.
    Websites, die diese Inhaltstypen zulassen müssen, können sie mithilfe des Attributs Data spezifizieren.
- `'unsafe-eval'`
  - : Ermöglicht die Verwendung von `eval()` und anderen unsicheren Methoden, um Code aus Zeichenketten zu erstellen.
    Sie müssen die einfachen Anführungszeichen einschließen.
- `'wasm-unsafe-eval'`
  - : Ermöglicht das Laden und Ausführen von WebAssembly-Modulen, ohne auch unsichere JavaScript-Ausführung über `'unsafe-eval'` zu erlauben.
    Die einfachen Anführungszeichen sind erforderlich.
- `'unsafe-hashes'`
  - : Ermöglicht das Aktivieren spezifischer inline [Ereignishandler](/de/docs/Web/Events/Event_handlers).
    Wenn Sie nur inline Ereignishandler und nicht inline {{HTMLElement("script")}}-Elemente oder [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript) erlauben müssen, ist dies eine sicherere Methode als die Verwendung des `unsafe-inline`-Ausdrucks.
- `'unsafe-inline'`
  - : Ermöglicht die Verwendung von Inline-Ressourcen, wie Inline-{{HTMLElement("script")}}-Elementen, [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript), Inline-Ereignishandlern und Inline-{{HTMLElement("style")}}-Elementen.
    Die einfachen Anführungszeichen sind erforderlich.
- `'none'`
  - : Bezieht sich auf die leere Menge; das heißt, keine URLs stimmen überein.
    Die einfachen Anführungszeichen sind erforderlich.
- `'nonce-<base64-value>'`

  - : Eine Positivliste für spezifische Inline-Skripte mittels einer kryptografischen Einmalnummer (Nonce).
    Der Server muss bei jeder Übermittlung einer Richtlinie einen einzigartigen Nonce-Wert generieren.
    Es ist wichtig, einen nicht erratbaren Nonce bereitzustellen, da andernfalls das Umgehen einer Richtlinie trivial wäre.
    Siehe [unsicheres Inline-Skript](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) für ein Beispiel.
    Die Angabe von Nonce führt dazu, dass ein moderner Browser `'unsafe-inline'` ignoriert, was dennoch für ältere Browser ohne Nonce-Unterstützung gesetzt werden könnte.

    > [!NOTE]
    > Die CSP-`nonce`-Quelle kann nur auf _noncefähige_ Elemente angewendet werden (z.B. da das {{HTMLElement("img")}}-Element kein `nonce`-Attribut hat, gibt es keine Möglichkeit, es mit dieser CSP-Quelle zu verknüpfen).

- `'<hash-algorithm>-<base64-value>'`
  - : Ein sha256-, sha384- oder sha512-Hash von Skripten oder Styles.
    Dieser Wert besteht aus dem Algorithmus, der zur Erstellung des Hashs verwendet wird, gefolgt von einem Bindestrich und dem base64-kodierten Hash des Skripts oder Styles.
    Beim Erstellen des Hashs, schließen Sie `<script>` oder `<style>`-Tags aus und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, wichtig sind.
    In CSP 2.0 können Hash-Quellen auf Inline-Skripte und Stile angewendet werden. Hash-Quellen-Ausdrücke sind in [CSP 3.0](https://www.w3.org/TR/CSP3/#external-hash) für externe Skripte in `script-src`-Direktiven erlaubt.
    Siehe die Seiten [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) und [style-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles) für weitere Informationen und Beispiele.
- `'strict-dynamic'`
  - : Der `strict-dynamic`-Quellenausdruck spezifiziert, dass das Vertrauen, das explizit einem Skript im Markup mittels eines Nonce oder Hashs gegeben wird, auf alle Skripte übertragen wird, die von diesem Ausgangsskript geladen werden.
    Zugleich werden jegliche Positivlisten oder Quellenausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.
    Siehe [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) für ein Beispiel.
- `'report-sample'`
  - : Erfordert, dass ein Beispiel des verletzenden Codes im Verletzungsbericht enthalten ist.
- `'inline-speculation-rules'`
  - : Erlaubt die Einbeziehung von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripten (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

## Spezifikationen

{{Specifications}}

## Relevante Direktiven

Direktiven, für die die oben genannten Quellen gelten, umfassen:

- {{Glossary("fetch directive", "Abrufrichtlinien")}}:

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

- {{Glossary("Document directive", "Dokumentrichtlinien")}}:

  - {{CSP("base-uri")}}
  - {{CSP("sandbox")}}

- {{Glossary("Navigation directive", "Navigationsrichtlinien")}}:

  - {{CSP("form-action")}}
  - {{CSP("frame-ancestors")}}
