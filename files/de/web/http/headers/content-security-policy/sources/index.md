---
title: CSP source values
slug: Web/HTTP/Headers/Content-Security-Policy/Sources
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}}-Headerdirektiven, die eine `<source>` spezifizieren, von der Ressourcen geladen werden dürfen, können einen der unten aufgeführten Werte verwenden. Relevante Direktiven sind die [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) sowie andere [unten aufgeführte](#relevante_direktiven).

## Quellen

- `<host-source>`

  - : Internet-Host nach Name oder IP-Adresse. Das [URL-Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), die Portnummer und der Pfad sind optional.
    Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was anzeigt, dass alle legalen Werte für jede davon gültig sind.
    Beim Abgleichen von Schemas sind sichere Upgrades zulässig (z.B. würde `http://example.com` auch `https://example.com` abdecken).
    Beispiele:

    - `http://*.example.com`: Deckt alle Versuche ab, von einer beliebigen Subdomain von example.com zu laden. Deckt auch `https`-Ressourcen ab.
    - `mail.example.com:443`: Deckt alle Versuche ab, von Port 443 auf mail.example.com zu laden.
    - `https://store.example.com`: Deckt alle Versuche ab, auf store.example.com über `https:` zuzugreifen.
    - `*.example.com`: Deckt alle Versuche ab, von einer beliebigen Subdomain von example.com zu laden.
    - `https://*.example.com:12/path/to/file.js`: Deckt alle Versuche ab, von einer beliebigen Subdomain von example.com über `https:` auf Port 12 zu laden, und nur wenn der Pfad `/path/to/file.js` ist.
    - `ws://example.com`: Deckt alle Versuche ab, von example.com über `ws:` zu laden. Deckt auch `wss`-Ressourcen ab.
    - `https://example.com/subdirectory`: Deckt alle Versuche ab, den exakten Pfad `https://example.com/subdirectory` zu laden.
    - `https://example.com/subdirectory/`: Deckt alle Versuche ab, Dateien im Verzeichnis `subdirectory` zu laden. Zum Beispiel `https://example.com/subdirectory/path/to/file.js`. Es deckt nicht `https://example.com/path/to/file.js` ab.

    Weitere Details zur Pfadübereinstimmung finden Sie in den [Algorithmen zur Teileübereinstimmung](https://w3c.github.io/webappsec-csp/#match-schemes) in der Spezifikation.

- `<scheme-source>`

  - : Ein Schema wie `http:` oder `https:`.
    Der Doppelpunkt ist erforderlich.
    Im Gegensatz zu anderen unten aufgeführten Werten sollten keine einfachen Anführungszeichen verwendet werden.
    Sie können auch Datenschemen angeben (nicht empfohlen).

    - `data:` Erlaubt [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquelle.
      _Dies ist unsicher; ein Angreifer kann auch willkürliche `data:` URLs injizieren. Verwenden Sie dies sparsam und definitiv nicht für Skripte._
    - `mediastream:` Erlaubt [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle.
    - `blob:` Erlaubt [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquelle.
    - `filesystem:` Erlaubt [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle.

    > [!NOTE]
    > Wenn eine Schemenquelle fehlt, wird das Schema des Dokumentursprungs verwendet.
    > Sichere Upgrades sind erlaubt, sodass wenn das Dokument mit `https:` geladen wird, dann `example.com` mit `https://example.com` übereinstimmen wird, aber nicht mit `http://example.com`.
    > Für weitere Informationen siehe [CSP Level 3](https://www.w3.org/TR/CSP3/#match-url-to-source-list).

- `'self'`
  - : Bezieht sich auf den Ursprung, von dem das geschützte Dokument geladen wird, einschließlich desselben URL-Schemas und der Portnummer.
    Sie müssen die einfachen Anführungszeichen einschließen. Einige Browser schließen `blob` und `filesystem` spezifisch von Sourcedirektiven aus.
    Websites, die diese Inhaltstypen zulassen müssen, können sie mit dem Data-Attribut spezifizieren.
- `'unsafe-eval'`
  - : Erlaubt die Verwendung von `eval()` und anderen unsicheren Methoden zur Erstellung von Code aus Zeichenfolgen.
    Sie müssen die einfachen Anführungszeichen einschließen.
- `'wasm-unsafe-eval'`
  - : Erlaubt das Laden und Ausführen von WebAssembly-Modulen, ohne dass die unsichere JavaScript-Ausführung über `'unsafe-eval'` ebenfalls erlaubt sein muss.
    Die einfachen Anführungszeichen sind erforderlich.
- `'unsafe-hashes'`
  - : Erlaubt die Aktivierung spezifischer Inline-[Ereignishandler](/de/docs/Web/Events/Event_handlers).
    Wenn Sie nur Inline-Ereignishandler und keine Inline-{{HTMLElement("script")}}-Elemente oder [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript) zulassen müssen, ist dies eine sicherere Methode als der Einsatz des Ausdrucks `unsafe-inline`.
- `'unsafe-inline'`
  - : Erlaubt die Verwendung von Inline-Ressourcen, wie Inline-{{HTMLElement("script")}}-Elementen, [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript), Inline-Ereignishandlern und Inline-{{HTMLElement("style")}}-Elementen.
    Die einfachen Anführungszeichen sind erforderlich.
- `'none'`
  - : Bezieht sich auf die leere Menge; das heißt, keine URLs entsprechen.
    Die einfachen Anführungszeichen sind erforderlich.
- `'nonce-<base64-value>'`

  - : Eine Positivliste für spezifische Inline-Skripte unter Verwendung einer kryptografischen Nonce (nur einmal verwendete Nummer).
    Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren.
    Es ist entscheidend, eine nicht erratbare Nonce bereitzustellen, da sonst das Umgehen der Richtlinie einer Ressource trivial ist.
    Siehe [unsichere Inline-Skripte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) für ein Beispiel.
    Das Festlegen der Nonce sorgt dafür, dass ein moderner Browser `'unsafe-inline'` ignoriert, das trotzdem für ältere Browser ohne Nonce-Unterstützung festgelegt sein könnte.

    > [!NOTE]
    > Die CSP-`nonce`-Quelle kann nur auf _noncefähige_ Elemente angewendet werden (z.B. hat das {{HTMLElement("img")}}-Element kein `nonce`-Attribut, es gibt also keine Möglichkeit, es mit dieser CSP-Quelle zu verknüpfen).

- `'<hash-algorithm>-<base64-value>'`
  - : Ein sha256-, sha384- oder sha512-Hash von Skripten oder Stilen.
    Dieser Wert besteht aus dem Algorithmus, der zur Erstellung des Hashs verwendet wurde, gefolgt von einem Bindestrich und dem base64-kodierten Hash des Skripts oder Stils.
    Beim Generieren des Hashs schließen Sie `<script>` oder `<style>`-Tags aus und beachten Sie, dass Groß-/Kleinschreibung und Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, wichtig sind.
    In CSP 2.0 können Hash-Quellen auf Inline-Skripte und -Stile angewendet werden. Hash-Quellen-Ausdrücke sind in [CSP 3.0](https://www.w3.org/TR/CSP3/#external-hash) für externe Skripte in `script-src`-Direktiven zulässig.
    Siehe die Seiten [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) und [style-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles) für weitere Informationen und Beispiele.
- `'strict-dynamic'`
  - : Der `strict-dynamic`-Quellen-Ausdruck spezifiziert, dass das dem Markup-zugehörigen Skript durch eine Nonce oder einen Hash gegebene Vertrauen auf alle Skripte ausgeweitet wird, die von diesem Wurzelskript geladen werden.
    Gleichzeitig werden alle Positivlisten oder Quellen-Ausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.
    Siehe [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) für ein Beispiel.
- `'report-sample'`
  - : Erfordert, dass ein Beispiel des verletzenden Codes im Verstoßbericht enthalten ist.
- `'inline-speculation-rules'`
  - : Erlaubt die Aufnahme von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

## Spezifikationen

{{Specifications}}

## Relevante Direktiven

Direktiven, für die die obigen Quellen anwendbar sind, umfassen:

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

- [Dokumentdirektiven](/de/docs/Glossary/Document_directive):

  - {{CSP("base-uri")}}
  - {{CSP("sandbox")}}

- [Navigationsdirektiven](/de/docs/Glossary/Navigation_directive):

  - {{CSP("form-action")}}
  - {{CSP("frame-ancestors")}}
