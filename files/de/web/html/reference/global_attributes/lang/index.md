---
title: HTML lang globales Attribut
short-title: lang
slug: Web/HTML/Reference/Global_attributes/lang
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`lang`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) hilft dabei, die Sprache eines Elements zu definieren: die Sprache, in der nicht-editierbare Elemente geschrieben sind, oder die Sprache, in der die editierbaren Elemente vom Benutzer geschrieben werden sollten. Das Attribut enthält einen einzelnen {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.

> [!NOTE]
> Der Standardwert von `lang` ist der leere String, was bedeutet, dass die Sprache unbekannt ist. Daher wird empfohlen, immer einen geeigneten Wert für dieses Attribut anzugeben.

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

Wenn der Attributwert der _leere String_ (`lang=""`) ist, wird die Sprache als _unbekannt_ gesetzt; wenn der Sprach-Tag gemäß BCP47 nicht gültig ist, wird er als _ungültig_ gesetzt.

Selbst wenn das `lang`-Attribut gesetzt ist, kann es möglicherweise nicht berücksichtigt werden, da das `xml:lang`-Attribut Vorrang hat.

Für die CSS-Pseudoklasse {{cssxref(":lang")}} sind zwei ungültige Sprachbezeichnungen unterschiedlich, wenn ihre Namen unterschiedlich sind. Während `:lang(es)` sowohl `lang="es-ES"` als auch `lang="es-419"` entspricht, würde `:lang(xyzzy)` _nicht_ `lang="xyzzy-Zorp!"` entsprechen.

## Barrierefreiheitsaspekte

Das WCAG-Erfolgskriterium 3.1.1 **verlangt**, dass eine Seitensprache auf eine Weise angegeben wird, die 'programmatisch bestimmbar' ist (d.h. über das **`lang`**-Attribut).

Das WCAG-Erfolgskriterium 3.1.2 verlangt, dass Seiten mit **Teilen** in verschiedenen Sprachen auch die Sprachen dieser Teile spezifizieren. Auch hier ist das **`lang`**-Attribut der korrekte Mechanismus dafür.

Der Zweck dieser Anforderungen besteht hauptsächlich darin, unterstützenden Technologien wie Bildschirmlesegeräten zu ermöglichen, die korrekte Aussprache zu verwenden.

Zum Beispiel beinhaltet das Sprachmenü auf dieser Seite (MDN) ein **`lang`**-Attribut für jeden Eintrag:

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

## Vererbung

Wenn ein Element kein `lang`-Attribut hat, wird es den `lang`-Wert von seinem {{Glossary("Node/DOM", "Elternknoten")}} erben, der ihn wiederum von seinem Elternteil erben kann, und so weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Content-Language` HTTP Header](/de/docs/Web/HTTP/Reference/Headers/Content-Language)
- HTML [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) Attribut
