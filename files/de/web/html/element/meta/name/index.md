---
title: Standard-Metadatennamen
slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: b8ed1dc2ae2ff1b6f44f389ac9756fed78b03f0e
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann verwendet werden, um Dokument-Metadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das Attribut [`name`](/de/docs/Web/HTML/Element/meta#name) den Namen und das Attribut [`content`](/de/docs/Web/HTML/Element/meta#content) den Wert der Metadaten angibt.

### Standard-Metadatennamen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert die folgende Menge an Standard-Metadatennamen:

- `application-name`: Der Name der Anwendung, die auf der Webseite ausgeführt wird.

  > [!NOTE]
  >
  > - Browser können dies verwenden, um die Anwendung zu identifizieren. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber auch Informationen wie den Dokumentnamen oder einen Status enthalten kann.
  > - Einfache Webseiten sollten keinen `application-name` definieren.

- `author`: Der Name des Autors des Dokuments.
- `description`: Eine kurze und präzise Zusammenfassung des Inhalts der Seite. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: Die Kennung der Software, die die Seite erzeugt hat.
- `keywords`: Wörter, die für den Inhalt der Seite relevant sind, durch Kommas getrennt.
- `referrer`: Steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden:

  <table class="standard-table">
    <caption>
      Werte für das
      <code>content</code>
      Attribut von
      <code>&#x3C;meta name="referrer"></code>
    </caption>
    <tbody>
      <tr>
        <td><code>no-referrer</code></td>
        <td>Sendet keinen HTTP-{{httpheader("Referer")}}-Header.</td>
      </tr>
      <tr>
        <td><code>origin</code></td>
        <td>Sendet den {{Glossary("origin", "origin")}} des Dokuments.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Sendet die vollständige URL, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS), sendet jedoch keinen Referrer, wenn es
          weniger sicher ist (HTTPS→HTTP). Dies ist das Standardverhalten.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für `same-origin`-Anfragen,
          sendet jedoch nur den Origin in anderen Fällen.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für `same-origin`-Anfragen.
          `cross-origin`-Anfragen enthalten keinen Referrer-Header.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Sendet den Origin, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS), sendet jedoch keinen Referrer, wenn es
          weniger sicher ist (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für `same-origin`-Anfragen.
          Sendet den Origin, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS). Andernfalls wird kein Referrer gesendet.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für `same-origin`- oder
          `cross-origin`-Anfragen.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Verhalten des Referrers unvorhersehbar.
  > - Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

- [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color): Gibt eine vorgeschlagene Farbe an, die Benutzeragenten zur Anpassung der Anzeige der Seite oder der umgebenden Benutzeroberfläche verwenden sollten. Das `content`-Attribut enthält eine gültige CSS-{{cssxref("&lt;color&gt;")}}. Mit dem `media`-Attribut und einer gültigen Medienanfrageliste kann das Medium festgelegt werden, auf das die Metadaten zur Themenfarbe angewendet werden.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: Gibt eine oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.

  Der Browser verwendet diese Informationen zusammen mit den Einstellungen des Benutzers auf dem Browser oder Gerät, um festzulegen, welche Farben für alles von Hintergründen und Vordergründen zu Formularsteuerelementen und Scrollbalken verwendet werden sollen. Der Hauptzweck von `<meta name="color-scheme">` ist, die Kompatibilität mit - und die Reihenfolge der Präferenz für - helle und dunkle Farbmodi anzuzeigen.

  Der Wert der [`content`](/de/docs/Web/HTML/Element/meta#content)-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument ist sich der Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Eines oder mehrere vom Dokument unterstützte Farbschemata. Die mehrfache Angabe desselben Farbschemas hat denselben Effekt wie die einmalige Angabe. Die Angabe mehrerer Farbschemata zeigt, dass das erste Schema vom Dokument bevorzugt wird, aber dass das zweite angegebene Schema akzeptabel ist, wenn der Benutzer es bevorzugt.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ den hellen Modus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Laut Spezifikation ist `only dark` _nicht gültig_, da das Erzwingen eines Dokuments zur Darstellung im dunklen Modus, wenn es damit nicht wirklich kompatibel ist, zu unlesbarem Inhalt führen kann; alle großen Browser standardisieren auf den hellen Modus, wenn er nicht anders konfiguriert ist.

  Zum Beispiel, um anzuzeigen, dass ein Dokument den dunklen Modus bevorzugt, aber auch im hellen Modus funktioniert:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentebene auf dieselbe Weise wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft es einzelnen Elementen ermöglicht, ihre bevorzugten und akzeptierten Farbschemata anzugeben. Ihre Stile können sich an das aktuelle Farbschema mit der CSS-Medienfunktion {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} anpassen.

### Standard-Metadatennamen, die in anderen Spezifikationen definiert sind

Die Spezifikation zur CSS-Geräteanpassung definiert folgenden Metadatennamen:

- `viewport`: Gibt Hinweise über die Größe des anfänglichen {{Glossary("viewport", "Ansichtsfensters")}}.

  <table class="fullwidth-table">
    <caption>
      Werte für den Inhalt von
      <code>&#x3C;meta name="viewport"></code>
    </caption>
    <thead>
      <tr>
        <th scope="col">Wert</th>
        <th scope="col">Mögliche Unterwerte</th>
        <th scope="col">Beschreibung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>width</code></td>
        <td>Eine positive ganze Zahl oder der Text <code>device-width</code></td>
        <td>
          Definiert die Pixelbreite des Ansichtsfensters, in der die Webseite gerendert werden soll.
        </td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td>Eine positive ganze Zahl oder der Text <code>device-height</code></td>
        <td>Definiert die Höhe des Ansichtsfensters. Wird von keinem Browser verwendet.</td>
      </tr>
      <tr>
        <td><code>initial-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das Verhältnis zwischen der Gerätebreite (<code>device-width</code> im
          Hochformat oder <code>device-height</code> im Querformat) und der
          Ansichtsfenstergröße.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert den maximalen Vergrößerungsgrad. Er muss größer oder gleich dem
          <code>minimum-scale</code> sein, andernfalls ist das Verhalten undefiniert. Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert die minimale Zoomstufe. Sie muss kleiner oder gleich dem
          <code>maximum-scale</code> sein, andernfalls ist das Verhalten undefiniert. Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer die Webseite nicht
          vergrößern. Der Standardwert ist <code>yes</code>. Browsereinstellungen können
          diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der Wert <code>auto</code> beeinflusst das anfängliche Layout-Viewport
            nicht, und die gesamte Webseite ist sichtbar.
          </p>
          <p>
            Der Wert <code>contain</code> bedeutet, dass das Ansichtsfenster so skaliert wird,
            dass das größte Rechteck, das innerhalb des Displays eingeschrieben ist,
            passt.
          </p>
          <p>
            Der Wert <code>cover</code> bedeutet, dass das Ansichtsfenster so skaliert wird, dass
            das Display des Geräts gefüllt ist. Es wird dringend empfohlen, die
            Variablen zum <a href="/de/docs/Web/CSS/env">sicheren Bereich</a>
            zu verwenden, um sicherzustellen, dass wichtige Inhalte nicht außerhalb des Displays
            enden.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Das Deaktivieren der Zoomfunktionen durch Setzen von `user-scalable` auf `no` verhindert, dass Personen mit Sehbehinderungen die Inhalte lesen und verstehen können.
  >
  > - [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Weitere Metadatennamen

#### Namen, die im WHATWG MetaExtensions-Wiki definiert sind

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Menge an nicht standardisierten Metadatennamen, die noch nicht formell akzeptiert wurden; einige der dort enthaltenen Namen werden jedoch bereits häufig in der Praxis verwendet, einschließlich der folgenden:

- `creator`: Der Name des Erstellers des Dokuments, zum Beispiel eine Organisation oder Institution. Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym für `robots`, wird nur von Googlebot (dem Indexierungs-Crawler von Google) befolgt.
- `publisher`: Der Name des Herausgebers des Dokuments.
- `robots`: Das Verhalten, das kooperative Crawler oder "Roboter" mit der Seite verwenden sollten. Es ist eine durch Kommas getrennte Liste der folgenden Werte:

  | Wert           | Beschreibung                                                                                 | Verwendet von                                                                                                                                                                                                                                            |
  | -------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | Erlaubt dem Roboter, die Seite zu indexieren (Standard).                                     | Alle                                                                                                                                                                                                                                                     |
  | `noindex`      | Fordert den Roboter auf, die Seite nicht zu indexieren.                                      | Alle                                                                                                                                                                                                                                                     |
  | `follow`       | Erlaubt dem Roboter, den Links auf der Seite zu folgen (Standard).                           | Alle                                                                                                                                                                                                                                                     |
  | `nofollow`     | Fordert den Roboter auf, den Links auf der Seite nicht zu folgen.                            | Alle                                                                                                                                                                                                                                                     |
  | `all`          | Äquivalent zu `index, follow`                                                                | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                            |
  | `none`         | Äquivalent zu `noindex, nofollow`                                                            | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                            |
  | `noarchive`    | Fordert die Suchmaschine auf, den Seiteninhalt nicht im Cache zu speichern.                  | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | Verhindert die Anzeige einer Beschreibung der Seite in den Suchmaschinenergebnissen.         | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Fordert an, dass diese Seite nicht als die Referenzseite eines indexierten Bildes erscheint. | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | Synonym für `noarchive`.                                                                     | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Roboter befolgen diese Regeln. Erwarten Sie nicht, E-Mail-Sammler damit zu verhindern.
  > - Der Roboter muss dennoch auf die Seite zugreifen, um diese Regeln zu lesen. Um den Bandbreitenverbrauch zu verhindern, überlegen Sie, ob die Verwendung einer _{{Glossary("robots.txt", "robots.txt")}}_-Datei angemessener ist.
  > - Das `<meta name="robots">`-Element und die `robots.txt`-Datei dienen unterschiedlichen Zwecken: `robots.txt` steuert das Crawlen von Seiten und beeinflusst nicht die Indexierung oder andere durch das `robots`-Meta gesteuerte Verhaltensweisen. Eine Seite, die nicht gecrawlt werden kann, kann dennoch indiziert werden, wenn sie von einem anderen Dokument referenziert wird.
  > - Wenn Sie eine Seite entfernen möchten, funktioniert `noindex`, aber nur nachdem der Roboter die Seite erneut besucht hat. Stellen Sie sicher, dass die `robots.txt`-Datei keine erneuten Besuche verhindert.
  > - Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex`, oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Roboters undefiniert und kann zwischen ihnen variieren.
  > - Einige Crawler-Roboter, wie Google, Yahoo und Bing, unterstützen dieselben Werte für den HTTP-Header {{HTTPHeader("X-Robots-Tag")}}; dies ermöglicht es, dass auch Nicht-HTML-Dokumente wie Bilder diese Regeln verwenden.

#### Andere Namen

- `application-title`: Wird verwendet, um die Titelleiste einer App für Webanwendungen anzupassen, die als eigenständige Apps auf unterstützenden Desktop-Betriebssystemen installiert sind. Während der Textinhalt des {{HTMLElement("title")}}-Elements normalerweise in Browser-Tabs angezeigt wird, wenn die App in einem Browser ausgeführt wird, kann der Metadatenname `application-title` verwendet werden, um einen anderen Titel für die Anwendung festzulegen, wenn sie als eigenständige installierte App ausgeführt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
