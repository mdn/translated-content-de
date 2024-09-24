---
title: Standard-Metadaten-Namen
slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: 81c67156fef5fb82c439c8f0d8ce6d4dee86a3e3
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann genutzt werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das [`name`](/de/docs/Web/HTML/Element/meta#name)-Attribut den Metadaten-Namen und das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut den Wert angibt.

### Standard-Metadaten-Namen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert die folgenden Standard-Metadaten-Namen:

- `application-name`: Der Name der Anwendung, die auf der Webseite ausgeführt wird.

  > [!NOTE]
  >
  > - Browser können dies verwenden, um die Anwendung zu identifizieren. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber auch Informationen wie den Dokumentnamen oder einen Status enthalten kann.
  > - Einfache Webseiten sollten keinen application-name definieren.

- `author`: Der Name des Autors des Dokuments.
- `description`: Eine kurze und präzise Zusammenfassung des Inhalts der Seite. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: Die Kennung der Software, die die Seite generiert hat.
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
        <td>Sendet den {{glossary("origin")}} des Dokuments.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Sendet die vollständige URL, wenn das Ziel mindestens so sicher ist
          wie die aktuelle Seite (HTTP(S)→HTTPS), sendet aber keinen Referrer, wenn es weniger sicher ist (HTTPS→HTTP). Dieses Verhalten ist standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für Anfragen der gleichen Herkunft, sendet aber nur den Origin in anderen Fällen.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für Anfragen der gleichen Herkunft. Bei Anfragen von fremden Ursprüngen wird kein Referrer-Header enthalten sein.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Sendet den Origin, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), sendet aber keinen Referrer, wenn es weniger sicher ist (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für Anfragen der gleichen Herkunft. Sendet den Origin, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS). Andernfalls wird kein Referrer gesendet.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für Anfragen der gleichen oder fremden Herkunft.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Das dynamische Einfügen von `<meta name="referrer">` (mit {{domxref("Document.write", "document.write()")}} oder {{domxref("Node.appendChild", "appendChild()")}}) macht das Referrer-Verhalten unvorhersehbar.
  > - Wenn mehrere sich widersprechende Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

- [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color): Gibt eine vorgeschlagene Farbe an, die Nutzeragenten verwenden sollten, um die Darstellung der Seite oder der umgebenden Benutzeroberfläche zu personalisieren. Das `content`-Attribut enthält eine gültige CSS-{{cssxref("&lt;color&gt;")}}. Das `media`-Attribut mit einer gültigen Medienabfragenliste kann enthalten sein, um festzulegen, für welche Medien die Metadaten zur Themenfarbe gelten.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: Gibt ein oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.

  Der Browser verwendet diese Informationen zusammen mit den Browser- oder Geräteeinstellungen des Benutzers, um zu bestimmen, welche Farben von Hintergrund bis Vordergrund sowie für Formularelemente und Bildlaufleisten verwendet werden sollen. Die primäre Verwendung von `<meta name="color-scheme">` besteht darin, die Kompatibilität mit - und die Präferenzreihenfolge für - helle und dunkle Farbmodi anzugeben.

  Der Wert der [`content`](/de/docs/Web/HTML/Element/meta#content)-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument ist sich Farbschemata nicht bewusst und sollte mit der Standardfarbenpalette gerendert werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Eines oder mehrere vom Dokument unterstützte Farbschemata. Die gleiche Farbgebung mehr als einmal anzugeben hat den gleichen Effekt, wie sie nur einmal anzugeben. Mehrere Farbschemata anzugeben zeigt an, dass das erste Schema vom Dokument bevorzugt wird, das zweite Schema jedoch akzeptabel ist, wenn der Benutzer es vorzieht.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ einen hellen Modus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Gemäß der Spezifikation ist `only dark` _nicht gültig_, da die erzwungene Darstellung eines Dokuments im dunklen Modus, wenn es damit nicht wirklich kompatibel ist, zu unlesbarem Inhalt führen kann; alle großen Browser wechseln standardmäßig in den hellen Modus, wenn nicht anders konfiguriert.

  Zum Beispiel, um anzugeben, dass ein Dokument dunklen Modus bevorzugt, aber auch im hellen Modus funktionsfähig ist:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentebene genauso wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft einzelnen Elementen ermöglicht, ihre bevorzugten und akzeptierten Farbschemata anzugeben. Ihre Stilarten können sich an das aktuelle Farbschema mit dem CSS-{{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Media-Feature anpassen.

### Standard-Metadaten-Namen, die in anderen Spezifikationen definiert sind

Die CSS Device Adaptation Spezifikation definiert den folgenden Metadaten-Namen:

- `viewport`: Gibt Hinweise zur anfänglichen Größe des {{glossary("viewport")}}.

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
        <td>Eine positive Ganzzahl oder der Text <code>device-width</code></td>
        <td>
          Definiert die Pixelbreite des Viewports, bei der die Website gerendert werden soll.
        </td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td>Eine positive Ganzzahl oder der Text <code>device-height</code></td>
        <td>Definiert die Höhe des Viewports. Von keinem Browser verwendet.</td>
      </tr>
      <tr>
        <td><code>initial-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das Verhältnis zwischen der Gerätebreite (<code>device-width</code> im Hochformat oder <code>device-height</code> im Querformat) und der Größe des Viewports.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das maximale Vergrößerungsmaß. Es muss größer oder gleich dem <code>minimum-scale</code> sein, andernfalls ist das Verhalten undefiniert. Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert den minimalen Zoomlevel. Es muss kleiner oder gleich dem <code>maximum-scale</code> sein, andernfalls ist das Verhalten undefiniert. Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer die Webseite nicht vergrößern. Standard ist <code>yes</code>. Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der Wert <code>auto</code> beeinflusst das anfängliche Layout-Viewport nicht und die gesamte Webseite ist sichtbar.
          </p>
          <p>
            Der Wert <code>contain</code> bedeutet, dass der Viewport so skaliert wird, dass er das größte innerhalb des Displays eingeschriebene Rechteck umfasst.
          </p>
          <p>
            Der Wert <code>cover</code> bedeutet, dass der Viewport so skaliert wird, dass er das Anzeigegerät ausfüllt. Es wird stark empfohlen, die <a href="/de/docs/Web/CSS/env">sicheren Bereichs-Insets</a>-Variablen zu nutzen, um sicherzustellen, dass wichtiger Inhalt nicht außerhalb des Displays endet.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Die Deaktivierung der Zoomfähigkeiten, indem `user-scalable` auf einen Wert von `no` gesetzt wird, verhindert, dass Personen mit Sehschwäche den Seiteninhalt lesen und verstehen können.
  >
  > - [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Verständnis des Erfolgskriteriums 1.4.4 | W3C WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Weitere Metadaten-Namen

Die [WHATWG Wiki MetaExtensions Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Sammlung von nicht-standardisierten Metadaten-Namen, die bisher noch nicht formell akzeptiert wurden; jedoch werden einige der dort enthaltenen Namen bereits häufig in der Praxis verwendet — darunter die folgenden:

- `creator`: Der Name des Erstellers des Dokuments, wie z.B. eine Organisation oder Institution. Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym von `robots`, wird nur von Googlebot (dem Indexierungs-Crawler von Google) befolgt.
- `publisher`: Der Name des Herausgebers des Dokuments.
- `robots`: Das Verhalten, das kooperative Crawler oder "Roboter" mit der Seite anwenden sollen. Es handelt sich um eine komma-separierte Liste der unten aufgeführten Werte:

  | Wert          | Beschreibung                                                               | Verwendet von                                                                                                                                                                                                                                            |
  | --------------| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`       | Erlaubt dem Roboter, die Seite zu indexieren (Standard).                   | Alle                                                                                                                                                                                                                                                      |
  | `noindex`     | Fordert den Roboter auf, die Seite nicht zu indexieren.                    | Alle                                                                                                                                                                                                                                                      |
  | `follow`      | Erlaubt dem Roboter, die Links auf der Seite zu folgen (Standard).         | Alle                                                                                                                                                                                                                                                      |
  | `nofollow`    | Fordert den Roboter auf, die Links auf der Seite nicht zu folgen.          | Alle                                                                                                                                                                                                                                                      |
  | `all`         | Entspricht `index, follow`                                                 | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                            |
  | `none`        | Entspricht `noindex, nofollow`                                             | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                            |
  | `noarchive`   | Verhindert, dass die Suchmaschine den Seiteninhalt im Cache speichert.     | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`   | Verhindert die Anzeige jeglicher Beschreibung der Seite in Suchergebnissen.| [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex`| Fordert an, dass diese Seite nicht als verweisende Seite eines indexierten Bildes erscheint.| [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`     | Synonym für `noarchive`.                                                   | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Roboter folgen diesen Regeln. Erwarten Sie nicht, dass E-Mail-Ernteprogramme damit verhindert werden.
  > - Der Roboter muss noch auf die Seite zugreifen, um diese Regeln zu lesen. Um Bandbreitenverbrauch zu verhindern, berücksichtigen Sie, ob die Verwendung einer _{{Glossary("robots.txt")}}_ Datei angemessener ist.
  > - Das `robots` `<meta>`-Tag und die `robots.txt`-Datei haben unterschiedliche Zwecke: `robots.txt` steuert das Crawlen von Seiten und beeinflusst nicht das Indexieren oder anderes Verhalten, das von `robots` meta kontrolliert wird. Eine Seite, die nicht gecrawlt werden kann, kann immer noch indiziert werden, wenn sie von einem anderen Dokument referenziert wird.
  > - Wenn Sie eine Seite entfernen möchten, funktioniert `noindex`, aber erst, nachdem der Roboter die Seite erneut besucht. Stellen Sie sicher, dass die `robots.txt`-Datei keine erneuten Besuche verhindert.
  > - Einige Werte sind gegenseitig ausschließend, wie `index` und `noindex`, oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Roboters undefiniert und kann variieren.
  > - Einige Crawler-Roboter, wie Google, Yahoo und Bing, unterstützen die gleichen Werte für den HTTP-Header `X-Robots-Tag`; dies ermöglicht es, dass Nicht-HTML-Dokumente wie Bilder diese Regeln verwenden.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element) in [Was ist im Kopf? Metadaten in HTML](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
