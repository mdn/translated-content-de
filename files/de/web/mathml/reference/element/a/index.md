---
title: <a>
slug: Web/MathML/Reference/Element/a
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

Das **`<a>`**-Element von [MathML](/de/docs/Web/MathML) ermöglicht es, Hyperlinks innerhalb von MathML-Formeln zu erstellen und verschiedene Teile mit unterschiedlichen Zielen zu verknüpfen.

Das `<a>`-Element von MathML ist ein Container. Sie können damit einen Link um beliebige MathML-Inhalte legen. Für das Layout verhält es sich wie ein {{MathMLElement("mrow")}}-Element.

Wenn das Attribut `href` vorhanden ist, wird der Link durch Drücken der Eingabetaste aktiviert, während das `<a>`-Element den Fokus hat.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne `filename`-Wert verwendet werden:
    - Ohne Wert schlägt der Browser einen Dateinamen und eine Dateiendung vor, die er aus verschiedenen Quellen ableitet:
      - Dem HTTP-Header {{HTTPHeader("Content-Disposition")}}
      - Dem letzten Segment des URL-[Pfads](/de/docs/Web/API/URL/pathname)
      - Dem {{Glossary("MIME_type", "Medientyp")}} (aus dem Header {{HTTPHeader("Content-Type")}}, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) bei einer [`blob:`-URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Ein angegebener Wert wird als Dateiname vorgeschlagen. Die Zeichen `/` und `\` werden durch Unterstriche (`_`) ersetzt. Dateisysteme können weitere Zeichen in Dateinamen verbieten. Daher passen Browser den vorgeschlagenen Namen bei Bedarf an. Diese Anpassung erfolgt beim Auslösen des Downloads und ist über die Eigenschaft [`MathMLAnchorElement.download`](/de/docs/Web/API/MathMLAnchorElement/download) nicht beobachtbar.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [URLs desselben Ursprungs](/de/docs/Web/Security/Defenses/Same-origin_policy) sowie für [`blob:`](/de/docs/Web/URI/Reference/Schemes/blob)- und [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URLs desselben Ursprungs. Bei anderen URLs wird das Attribut `download` ignoriert und eine normale Navigation durchgeführt. Die Zielseite kann jedoch weiterhin mit `Content-Disposition` einen Download veranlassen.
    > - Wie Browser Downloads behandeln, hängt vom Browser, den Benutzereinstellungen und weiteren Faktoren ab. Benutzer können vor Beginn eines Downloads um Bestätigung gebeten werden. Die Datei kann auch automatisch gespeichert oder geöffnet werden – entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn das Attribut `download` berücksichtigt wird, hat es Vorrang vor dem Verhalten von `Content-Disposition: inline`. Der Parameter `filename` von `Content-Disposition` hat jedoch Vorrang vor dem Namen im Attribut `download`.

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt – sie können jedes von Browsern unterstützte URL-Schema verwenden:
    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Nachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Auch wenn Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites diese mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) nutzen.

    Darüber hinaus können andere URL-Funktionen bestimmte Teile einer Ressource ansteuern, darunter:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textstellen mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die natürliche Sprache der verlinkten URL. Hat keine integrierte Funktionalität. Die zulässigen Werte entsprechen denen des [globalen HTML-Attributs `lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang).

- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn dem Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` an diese URLs. Wird üblicherweise zur Nachverfolgung verwendet.

- `referrerpolicy`
  - : Legt fest, wie viele [Referrer-Informationen](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links gesendet werden und unter welchen Umständen.
    - `no-referrer`: Der Header {{HTTPHeader("Referer")}} wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der Header {{HTTPHeader("Referer")}} wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Die gesendeten Referrer-Informationen sind auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), ihren {{Glossary("host", "Host")}} und ihren {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Die an andere Ursprünge gesendeten Referrer-Informationen sind auf Schema, Host und Port beschränkt. Bei Navigationen innerhalb desselben Ursprungs wird weiterhin der Pfad einbezogen.
    - `same-origin`: Bei Anfragen an {{Glossary("Same-origin_policy", "denselben Ursprung")}} werden Referrer-Informationen gesendet, bei ursprungsübergreifenden Anfragen dagegen nicht.
    - `strict-origin`: Der Ursprung des Dokuments wird nur dann als Referrer gesendet, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS). An weniger sichere Ziele (HTTPS→HTTP) wird er nicht gesendet.
    - `strict-origin-when-cross-origin` (Standardwert): Bei Anfragen an denselben Ursprung wird eine vollständige URL gesendet. Wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS), wird nur der Ursprung gesendet. An weniger sichere Ziele (HTTPS→HTTP) wird kein entsprechender Header gesendet.
    - `unsafe-url`: Die Referrer-Informationen enthalten den Ursprung _und_ den Pfad (aber weder das [Fragment](/de/docs/Web/API/MathMLAnchorElement/hash) noch das [Passwort](/de/docs/Web/API/MathMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/MathMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade TLS-geschützter Ressourcen gegenüber unsicheren Ursprüngen offenlegt.

- `rel`
  - : Die Beziehung der verlinkten URL, angegeben als durch Leerzeichen getrennte Link-Typen. Weitere Informationen finden Sie auf der Seite zum [HTML-Attribut `rel`](/de/docs/Web/HTML/Reference/Attributes/rel).

- `target`
  - : Gibt über den Namen eines _Browsing Context_ (eines Tabs, Fensters oder {{HTMLElement("iframe")}}-Elements) an, wo die verlinkte URL angezeigt werden soll. Die folgenden Schlüsselwörter legen fest, wo die URL geladen wird:
    - `_self`: Der aktuelle Browsing Context. (Standardwert)
    - `_blank`: Üblicherweise ein neuer Tab. Benutzer können Browser jedoch so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing Context des aktuellen Kontexts. Ist keiner vorhanden, verhält sich der Wert wie `_self`.
    - `_top`: Der oberste Browsing Context, also der höchste Kontext, der ein Vorfahr des aktuellen Kontexts ist. Sind keine Vorfahren vorhanden, verhält sich der Wert wie `_self`.

- `type`
  - : Gibt mit einem {{Glossary("MIME_type", "MIME-Typ")}} einen Hinweis auf das Format der verlinkten URL. Hat keine integrierte Funktionalität.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel stellt die [Gammafunktion](https://en.wikipedia.org/wiki/Gamma_function) in MathML dar. Es enthält mehrere MathML-Elemente vom Typ `<a>`, die einzelne Teile der Formel mit den jeweiligen Abschnitten der Wikipedia-Seite verlinken.

#### MathML

```html live-sample___mathml-a
<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"
  ><semantics
    ><mrow
      ><a href="https://en.wikipedia.org/wiki/Gamma_function"
        ><mrow
          ><mi mathvariant="normal">Γ</mi><mo stretchy="false">(</mo><mi>t</mi
          ><mo stretchy="false">)</mo></mrow
        ></a
      ><mo>=</mo
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Main_definition"
        ><mrow
          ><msubsup
            ><mo>∫</mo><mn>0</mn><mrow><mo>+</mo><mn>∞</mn></mrow></msubsup
          ><msup
            ><mi>x</mi><mrow><mi>t</mi><mo>−</mo><mn>1</mn></mrow></msup
          ><msup
            ><mi>e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup
          ><mi>d</mi><mi>x</mi></mrow
        ></a
      ><mo>=</mo
      ><a
        href="https://en.wikipedia.org/wiki/Gamma_function#Euler's_definition_as_an_infinite_product"
        ><mrow
          ><mfrac><mn>1</mn><mi>t</mi></mfrac
          ><munderover
            ><mo>∏</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow
            ><mn>∞</mn></munderover
          ><mfrac
            ><msup
              ><mrow
                ><mo>(</mo
                ><mrow
                  ><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow
                ><mo>)</mo></mrow
              ><mi>t</mi></msup
            ><mrow
              ><mn>1</mn><mo>+</mo><mfrac><mi>t</mi><mi>n</mi></mfrac></mrow
            ></mfrac
          ></mrow
        ></a
      ><a href="https://en.wikipedia.org/wiki/Asymptotic_analysis#Definition"
        ><mo>∼</mo></a
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Stirling's_formula"
        ><mrow
          ><msqrt
            ><mfrac
              ><mrow><mn>2</mn><mi>π</mi></mrow
              ><mi>t</mi></mfrac
            ></msqrt
          ><msup
            ><mrow
              ><mo>(</mo><mfrac><mi>t</mi><mi>e</mi></mfrac
              ><mo>)</mo></mrow
            ><mi>t</mi></msup
          ></mrow
        ></a
      ></mrow
    ></semantics
  ></math
>
```

```css hidden live-sample___mathml-a
math {
  font-size: 4vw;
}
```

#### Ergebnis

{{EmbedLiveSample("mathml-a", "100%", "200")}}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">
        <code>generic</code>
      </a>
    </td>
  </tr>
  <tr>
    <th scope="row">DOM-Schnittstelle</th>
    <td>[`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)</td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)
