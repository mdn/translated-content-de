---
title: Globales HTML-Attribut `lang`
short-title: lang
slug: Web/HTML/Reference/Global_attributes/lang
l10n:
  sourceCommit: 8ed465762d06fa17f7cc6adb3e2be9b57df03e9b
---

Das globale Attribut **`lang`** hilft dabei, die Sprache eines Elements festzulegen: die Sprache, in der nicht bearbeitbare Elemente geschrieben sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein einzelnes {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}.

> [!NOTE]
> Die Sprache befindet sich in einem unbekannten Zustand, wenn es nirgends einen Hinweis auf die Sprache gibt. Es wird empfohlen, immer einen geeigneten Wert für dieses Attribut anzugeben, insbesondere aufgrund von [Barrierefreiheitsaspekten](#barrierefreiheitsaspekte).

{{InteractiveExample("HTML Demo: lang", "tabbed-shorter")}}

```html interactive-example
<p>This paragraph is English, but the language is not specifically defined.</p>

<p lang="en-GB">This paragraph is defined as British English.</p>

<p lang="fr">Ce paragraphe est défini en français.</p>
```

```css interactive-example
p::before {
  padding-right: 5px;
}

[lang="en-GB"]::before {
  content: "(In British English) ";
}

[lang="fr"]::before {
  content: "(In French) ";
}
```

## Werte

Das Attribut enthält ein einzelnes {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}. Wenn der Attributwert die _leere Zeichenfolge_ (`lang=""`) ist, wird die Sprache auf _unbekannt_ gesetzt; wenn das Sprachtag gemäß BCP47 nicht gültig ist, wird sie auf _ungültig_ gesetzt.

Wenn auch das Attribut `xml:lang` angegeben ist, verlangt die HTML-Spezifikation, dass die Werte der Attribute `lang` und `xml:lang` ohne Berücksichtigung der Groß- und Kleinschreibung gleich sind. Das Attribut `xml:lang` hat Vorrang.

Für die CSS-Pseudoklasse {{cssxref(":lang")}} sind zwei ungültige Sprachnamen verschieden, wenn ihre Namen verschieden sind. Während also `:lang(es)` sowohl auf `lang="es-ES"` als auch auf `lang="es-419"` zutrifft, würde `:lang(xyzzy)` _nicht_ auf `lang="xyzzy-Zorp!"` zutreffen.

### Vererbung

Wenn ein Element kein Attribut `lang` oder `xml:lang` hat, erbt es die Sprache seines [Elternelements](/de/docs/Web/API/Node/parentElement) oder des [`host`](/de/docs/Web/API/ShadowRoot/host), wenn der Elternknoten ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ist. Wenn kein Vorgänger eine Sprache festlegt, kann die Sprache auch durch [`<meta http-equiv="content-language">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv#content-language) oder den HTTP-Header {{HTTPHeader("Content-Language")}} angegeben werden. Wenn anhand dieser Hinweise keine einzelne Inhaltssprache bestimmt werden kann, ist die Vorgabe die leere Zeichenfolge (mit _unbekannt_ als Inhaltssprache).

## Barrierefreiheitsaspekte

Das WCAG-Erfolgskriterium 3.1.1 **erfordert**, dass eine Seitensprache auf eine Weise angegeben wird, die „programmatisch bestimmt“ werden kann (d.h. über das Attribut **`lang`**).

Das WCAG-Erfolgskriterium 3.1.2 erfordert, dass bei Seiten mit **Teilen** in verschiedenen Sprachen auch die Sprachen dieser Teile angegeben werden. Auch hierfür ist das Attribut **`lang`** der richtige Mechanismus.

Der Zweck dieser Anforderungen besteht hauptsächlich darin, assistiven Technologien wie Screenreadern die korrekte Aussprache zu ermöglichen.

Beispielsweise enthält das Sprachmenü dieser Website (MDN) für jeden Eintrag ein Attribut **`lang`**:

```html
<div class="dropdown-container language-menu">
  <button
    id="header-language-menu"
    type="button"
    class="dropdown-menu-label"
    aria-haspopup="true"
    aria-owns="language-menu"
    aria-label="Current language is English. Choose your preferred language.">
    English
    <span class="dropdown-arrow-down" aria-hidden="true">▼</span>
  </button>
  <ul
    id="language-menu"
    class="dropdown-menu-items right show"
    aria-expanded="true"
    role="menu">
    <li role="menuitem">
      <a
        href="/ca/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Catalan">
        <bdi lang="ca">Català</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/de/docs/Web/HTML/Reference/Global_attributes/lang"
        title="German">
        <bdi lang="de">Deutsch</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/es/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Spanish">
        <bdi lang="es">Español</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/fr/docs/Web/HTML/Reference/Global_attributes/lang"
        title="French">
        <bdi lang="fr">Français</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ja/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Japanese">
        <bdi lang="ja">日本語</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ko/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Korean">
        <bdi lang="ko">한국어</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/pt-BR/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Portuguese (Brazilian)">
        <bdi lang="pt-BR">Português (do&nbsp;Brasil)</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ru/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Russian">
        <bdi lang="ru">Русский</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/uk/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Ukrainian">
        <bdi lang="uk">Українська</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Chinese (Simplified)">
        <bdi lang="zh-Hans">中文 (简体)</bdi>
      </a>
    </li>
    <li>
      <a
        href="/en-US/docs/Web/HTML/Reference/Global_attributes/lang"
        rel="nofollow"
        id="translations-add">
        Add a translation
      </a>
    </li>
  </ul>
</div>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Content-Language` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Content-Language)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
