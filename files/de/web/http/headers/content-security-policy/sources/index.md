---
title: CSP-Quellwerte
slug: Web/HTTP/Headers/Content-Security-Policy/Sources
l10n:
  sourceCommit: be48127d1f16af543287cbc54a9d4c6834ce1e30
---

{{HTTPSidebar}}

HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) [Abrufrichtlinien](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) können als Wert eine durch Leerzeichen getrennte Liste von _Quellausdrücken_ annehmen. Jeder Quellausdruck kann einer der unten aufgeführten Werte sein.

Neben Abrufrichtlinien können einige andere CSP-Richtlinien als Wert eine durch Leerzeichen getrennte Liste von Quellausdrücken annehmen, von denen jeder ein Teil der unten aufgeführten Werte sein kann, nämlich: eine von `<host-source>`, `<scheme-source>` oder das Schlüsselwort `'self'`. Diese anderen Richtlinien sind:

- {{CSP("base-uri")}}
- {{CSP("form-action")}}
- {{CSP("frame-ancestors")}}

Richtlinien, die eine Liste von Quellausdrücken akzeptieren, können stattdessen den einzelnen Wert `'none'` erhalten, was anzeigt, dass keine Ressourcen des angegebenen Typs geladen werden dürfen (oder, im Fall von nicht-abruffähigen Richtlinien, dass die zugehörige Funktion nicht erlaubt ist).

## Quellen

- `<host-source>`

  - : Internet-Host nach Name oder IP-Adresse. Das [URL-Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), die Portnummer und der Pfad sind optional.
    Platzhalter (`'*'`) können für Subdomains, Hostadresse und Portnummer verwendet werden, was bedeutet, dass alle rechtlichen Werte jedes einzelnen gültig sind.
    Beim Abgleichen von Schemas sind sichere Upgrades erlaubt (z. B. wird `http://example.com` mit `https://example.com` abgeglichen).
    Beispiele:

    - `http://*.example.com`: Entspricht allen Versuchen, von einer beliebigen Subdomain von example.com zu laden. Entspricht auch `https`-Ressourcen.
    - `mail.example.com:443`: Entspricht allen Versuchen, von Port 443 auf mail.example.com zu laden.
    - `https://store.example.com`: Entspricht allen Versuchen, auf store.example.com unter Verwendung von `https:` zuzugreifen.
    - `*.example.com`: Entspricht allen Versuchen, von einer beliebigen Subdomain von example.com zu laden.
    - `https://*.example.com:12/path/to/file.js`: Entspricht allen Versuchen, von einer beliebigen Subdomain von example.com unter Verwendung von `https:` auf Port 12 und nur wenn der Pfad `/path/to/file.js` ist, zu laden.
    - `ws://example.com`: Entspricht allen Versuchen, von example.com unter Verwendung von `ws:` zu laden. Entspricht auch `wss`-Ressourcen.
    - `https://example.com/subdirectory`: Entspricht allen Versuchen, den exakten Pfad `https://example.com/subdirectory` zu laden.
    - `https://example.com/subdirectory/`: Entspricht allen Versuchen, Dateien im Verzeichnis `subdirectory` zu laden. Zum Beispiel `https://example.com/subdirectory/path/to/file.js`. Es entspricht nicht `https://example.com/path/to/file.js`.

    Für weitere Details zur Pfad-Abgleichung beziehen Sie sich auf die [Parts-Matching-Algorithmen](https://w3c.github.io/webappsec-csp/#match-schemes) in der Spezifikation.

- `<scheme-source>`

  - : Ein Schema wie `http:` oder `https:`.
    Der Doppelpunkt ist erforderlich.
    Anders als bei anderen Werten unten, sollten keine einfachen Anführungszeichen verwendet werden.
    Sie können auch Daten-Schemas angeben (nicht empfohlen).

    - `data:` Erlaubt [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquelle zu verwenden.
      _Dies ist unsicher; ein Angreifer kann auch beliebige `data:` URLs injizieren. Verwenden Sie dies sparsam und definitiv nicht für Skripte._
    - `mediastream:` Erlaubt [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle zu verwenden.
    - `blob:` Erlaubt [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquelle zu verwenden.
    - `filesystem:` Erlaubt [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle zu verwenden.

    > [!NOTE]
    > Wenn eine Schemainformation fehlt, wird das Schema des Dokuments als Standardwert verwendet.
    > Sichere Upgrades sind erlaubt, sodass wenn das Dokument mit `https:` geladen wird, `example.com` mit `https://example.com` abgestimmt wird, aber nicht mit `http://example.com`.
    > Für weitere Informationen siehe [CSP Level 3](https://www.w3.org/TR/CSP3/#match-url-to-source-list).

- `'self'`
  - : Bezieht sich auf den Ursprung, von dem das geschützte Dokument bereitgestellt wird, einschließlich des gleichen URL-Schemas und der Portnummer.
    Sie müssen die einfachen Anführungszeichen einschließen. Einige Browser schließen spezifisch `blob` und `filesystem` aus Quellrichtlinien aus.
    Sites, die diese Inhaltstypen zulassen müssen, können sie mit dem Datenattribut spezifizieren.
- `'unsafe-eval'`
  - : Ermöglicht die Verwendung von `eval()` und anderen unsicheren Methoden, um Code aus Zeichenfolgen zu erstellen.
    Sie müssen die einfachen Anführungszeichen einschließen.
- `'wasm-unsafe-eval'`
  - : Ermöglicht das Laden und die Ausführung von WebAssembly-Modulen ohne die Notwendigkeit, auch unsichere JavaScript-Ausführung über `'unsafe-eval'` zuzulassen.
    Die einfachen Anführungszeichen sind erforderlich.
- `'unsafe-hashes'`
  - : Ermöglicht das Aktivieren spezifischer Inline-[Ereignishandler](/de/docs/Web/Events/Event_handlers).
    Wenn Sie nur Inline-Ereignishandler und nicht Inline-{{HTMLElement("script")}}-Elemente oder [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript) zulassen müssen, ist dies eine sicherere Methode als die Verwendung des Ausdrucks `unsafe-inline`.
- `'unsafe-inline'`
  - : Erlaubt die Verwendung von Inline-Ressourcen, wie Inline-{{HTMLElement("script")}}-Elemente, [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript), Inline-Ereignishandler und Inline-{{HTMLElement("style")}}-Elemente.
    Die einfachen Anführungszeichen sind erforderlich.
- `'nonce-<base64-value>'`

  - : Eine Zulassungsliste für spezifische Skripte unter Verwendung eines kryptografischen Nonce (nur einmal verwendete Zahl).
    Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren.
    Es ist entscheidend, einen nicht erratbaren Nonce bereitzustellen, da das Umgehen einer Ressourcenrichtlinie sonst trivial ist.
    Siehe [unsicheres Inline-Skript](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) für ein Beispiel.
    Die Angabe eines Nonces veranlasst einen modernen Browser, `'unsafe-inline'` zu ignorieren, was immer noch für ältere Browser ohne Nonce-Unterstützung eingestellt sein könnte.

    > [!NOTE]
    > Die CSP-`nonce`-Quelle kann nur auf _nonce-fähige_ Elemente angewendet werden (z. B. da das {{HTMLElement("img")}}-Element kein `nonce`-Attribut hat, gibt es keine Möglichkeit, es mit dieser CSP-Quelle zu verbinden).

- `'<hash-algorithm>-<base64-value>'`
  - : Ein sha256-, sha384- oder sha512-Hash von Skripten oder Stilen.
    Dieser Wert besteht aus dem Algorithmus, der verwendet wird, um den Hash zu erstellen, gefolgt von einem Bindestrich und dem base64-kodierten Hash des Skripts oder Stils.
    Beim Generieren des Hashs, schließen Sie `<script>` oder `<style>` Tags aus und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen von Bedeutung sind, einschließlich führender oder nachfolgender Leerzeichen.
    In CSP 2.0 können Hashquellen auf Inline-Skripte und -Stile angewendet werden. Hashquellausdrücke sind in [CSP 3.0](https://www.w3.org/TR/CSP3/#external-hash) für externe Skripte in `script-src`-Richtlinien zulässig.
    Siehe die Seiten [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) und [style-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles) für weitere Informationen und Beispiele.
- `'strict-dynamic'`
  - : Der `strict-dynamic`-Quellausdruck gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript ausdrücklich durch die Begleitung mit einem Nonce oder einem Hash gegeben wird, auf alle von diesem Stamm-Skript geladenen Skripte übertragen werden soll.
    Gleichzeitig werden alle Zulassungslisten oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.
    Siehe [script-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) für ein Beispiel.
- `'report-sample'`
  - : Erfordert, dass ein Beispiel des verletzenden Codes in den Verstoßbericht aufgenommen wird.
- `'inline-speculation-rules'`
  - : Erlaubt die Einbeziehung von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

## Spezifikationen

{{Specifications}}
