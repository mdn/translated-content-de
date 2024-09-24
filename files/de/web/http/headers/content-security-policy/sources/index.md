---
title: CSP source values
slug: Web/HTTP/Headers/Content-Security-Policy/Sources
l10n:
  sourceCommit: be48127d1f16af543287cbc54a9d4c6834ce1e30
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) [Abruf-Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) können als Wert eine durch Leerzeichen getrennte Liste von _Quellausdrücken_ annehmen. Jedes Quellausdruck kann einer der unten aufgeführten Werte sein.

Neben Abruf-Direktiven können einige andere CSP-Direktiven als Wert eine durch Leerzeichen getrennte Liste von Quellausdrücken annehmen, die jeweils eine Teilmenge der unten aufgeführten Werte sein können, nämlich: eines der `<host-source>`, `<scheme-source>` oder das Schlüsselwort `'self'`. Diese anderen Direktiven sind:

- {{CSP("base-uri")}}
- {{CSP("form-action")}}
- {{CSP("frame-ancestors")}}

Direktiven, die eine Liste von Quellausdrücken akzeptieren, können stattdessen den einzigen Wert `'none'` erhalten, was anzeigt, dass keine Ressourcen des angegebenen Typs geladen werden dürfen (oder im Fall von Nicht-Abruf-Direktiven, dass das zugehörige Feature nicht erlaubt ist).

## Quellen

- `<host-source>`

  - : Internet-Host per Name oder IP-Adresse. Das [URL-Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), die Portnummer und der Pfad sind optional.
    Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was bedeutet, dass alle zulässigen Werte für jedes gültig sind.
    Beim Abgleichen von Schemas sind sichere Upgrades erlaubt (z.B. `http://example.com` wird mit `https://example.com` verglichen).
    Beispiele:

    - `http://*.example.com`: Passt auf alle Versuche, von einer beliebigen Subdomain von example.com zu laden. Passt auch auf `https`-Ressourcen.
    - `mail.example.com:443`: Passt auf alle Versuche, von Port 443 auf mail.example.com zu laden.
    - `https://store.example.com`: Passt auf alle Versuche, auf store.example.com über `https:` zuzugreifen.
    - `*.example.com`: Passt auf alle Versuche, von einer beliebigen Subdomain von example.com zu laden.
    - `https://*.example.com:12/path/to/file.js`: Passt auf alle Versuche, von einer beliebigen Subdomain von example.com über `https:` auf Port 12 zu laden, und nur wenn der Pfad `/path/to/file.js` ist.
    - `ws://example.com`: Passt auf alle Versuche, von example.com über `ws:` zu laden. Passt auch auf `wss`-Ressourcen.
    - `https://example.com/subdirectory`: Passt auf alle Versuche, den genauen Pfad `https://example.com/subdirectory` zu laden.
    - `https://example.com/subdirectory/`: Passt auf alle Versuche, Dateien im `subdirectory`-Verzeichnis zu laden. Beispielsweise `https://example.com/subdirectory/path/to/file.js`. Es passt nicht auf `https://example.com/path/to/file.js`.

    Für weitere Details darüber, wie die Zuordnung von Pfaden erfolgt, beziehen Sie sich auf die [Teile-Zuordnungsalgorithmen](https://w3c.github.io/webappsec-csp/#match-schemes) in der Spezifikation.

- `<scheme-source>`

  - : Ein Schema wie `http:` oder `https:`.
    Der Doppelpunkt ist erforderlich.
    Im Gegensatz zu anderen unten aufgeführten Werten sollten keine Einzelzitate verwendet werden.
    Sie können auch Daten-Schemas angeben (nicht empfohlen).

    - `data:` Ermöglicht die Verwendung von [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquelle.
      _Dies ist unsicher; ein Angreifer kann auch beliebige `data:` URLs injizieren. Verwenden Sie dies sparsam und definitiv nicht für Skripte._
    - `mediastream:` Ermöglicht die Verwendung von [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle.
    - `blob:` Ermöglicht die Verwendung von [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquelle.
    - `filesystem:` Ermöglicht die Verwendung von [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle.

    > [!NOTE]
    > Wenn ein Schemasource fehlt, wird das Schema des Dokumentsursprungs verwendet.
    > Sichere Upgrades sind erlaubt, also wenn das Dokument mit `https:` geladen wird, passt `example.com` auf `https://example.com`, aber nicht auf `http://example.com`.
    > Für weitere Informationen siehe [CSP Level 3](https://www.w3.org/TR/CSP3/#match-url-to-source-list).

- `'self'`
  - : Bezieht sich auf den Ursprung, von dem das geschützte Dokument bereitgestellt wird, einschließlich des gleichen URL-Schemas und der Portnummer.
    Sie müssen die Einzelzitate einschließen. Einige Browser schließen speziell `blob` und `filesystem` aus Quellrichtlinien aus.
    Websites, die diese Inhaltstypen zulassen müssen, können sie mit dem Datenattribut angeben.
- `'unsafe-eval'`
  - : Ermöglicht die Verwendung von `eval()` und anderen unsicheren Methoden zur Erstellung von Code aus Zeichenfolgen.
    Sie müssen die Einzelzitate einschließen.
- `'wasm-unsafe-eval'`
  - : Ermöglicht das Laden und Ausführen von WebAssembly-Modulen, ohne dass auch die unsichere JavaScript-Ausführung über `'unsafe-eval'` erlaubt werden muss.
    Die Einzelzitate sind erforderlich.
- `'unsafe-hashes'`
  - : Ermöglicht die Aktivierung bestimmter Inline-[Ereignishandler](/de/docs/Web/Events/Event_handlers).
    Wenn Sie nur Inline-Ereignishandler und keine Inline-{{HTMLElement("script")}}-Elemente oder [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript) zulassen müssen, ist dies eine sicherere Methode als die Verwendung des `unsafe-inline`-Ausdrucks.
- `'unsafe-inline'`
  - : Ermöglicht die Verwendung von Inline-Ressourcen wie Inline-{{HTMLElement("script")}}-Elemente, [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript), Inline-Ereignishandler und Inline-{{HTMLElement("style")}}-Elemente.
    Die Einzelzitate sind erforderlich.
- `'nonce-<base64-value>'`

  - : Eine Positivliste für bestimmte Skripte unter Verwendung eines kryptografischen Nonce (Number used once).
    Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren.
    Es ist entscheidend, einen nicht erratbaren Nonce bereitzustellen, da sonst das Umgehen der Richtlinie einer Ressource trivial ist.
    Siehe [unsicheres Inline-Skript](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) für ein Beispiel.
    Die Angabe eines Nonce bewirkt, dass ein moderner Browser `'unsafe-inline'` ignoriert, welches immer noch für ältere Browser ohne Nonce-Unterstützung festgelegt sein könnte.

    > [!NOTE]
    > Die CSP `nonce`-Quelle kann nur auf _Nonceable_-Elemente angewendet werden (z.B. da das {{HTMLElement("img")}}-Element kein `nonce`-Attribut hat, gibt es keine Möglichkeit, es mit dieser CSP-Quelle zu verknüpfen).

- `'<hash-algorithm>-<base64-value>'`
  - : Ein sha256-, sha384- oder sha512-Hash von Skripten oder Stilen.
    Dieser Wert besteht aus dem Algorithmus, der verwendet wurde, um den Hash zu erstellen, gefolgt von einem Bindestrich und dem base64-kodierten Hash des Skripts oder Stils.
    Wenn Sie den Hash generieren, schließen Sie \<script> oder \<style> Tags aus und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.
    In CSP 2.0 können Hash-Quellen auf Inline-Skripte und -Stile angewendet werden. Hash-Quellenausdrücke sind in [CSP 3.0](https://www.w3.org/TR/CSP3/#external-hash) für externe Skripte in `script-src`-Direktiven erlaubt.
    Sehen Sie sich die Seiten [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) und [style-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles) für weitere Informationen und Beispiele an.
- `'strict-dynamic'`
  - : Der `strict-dynamic`-Quellausdruck gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript ausdrücklich gegeben wird, indem es mit einem Nonce oder einem Hash versehen wird, auf alle Skripte, die von diesem Wurzelskript geladen werden, übertragen wird.
    Gleichzeitig werden alle Positivlisten- oder Quellenausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.
    Siehe [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) für ein Beispiel.
- `'report-sample'`
  - : Erfordert, dass ein Beispiel des verletzenden Codes im Verletzungsbericht enthalten ist.
- `'inline-speculation-rules'`
  - : Ermöglicht die Einbeziehung von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

## Spezifikationen

{{Specifications}}
