---
title: lang
slug: Web/HTML/Reference/Global_attributes/lang
l10n:
  sourceCommit: f08854db4f62cb334701d36dc7113bc98695f9f4
---

{{HTMLSidebar("Global_attributes")}}

Das **`lang`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente geschrieben sind, oder die Sprache, in der vom Benutzer bearbeitbare Elemente geschrieben werden sollten. Das Attribut enthält ein einzelnes "Sprachtag" im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist.

> [!NOTE]
> Der Standardwert von `lang` ist der leere String, was bedeutet, dass die Sprache unbekannt ist. Daher wird empfohlen, immer einen entsprechenden Wert für dieses Attribut anzugeben.

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

Wenn der Attributwert der _leere String_ (`lang=""`) ist, wird die Sprache auf _unbekannt_ gesetzt; wenn das Sprachtag nicht gemäß BCP47 gültig ist, wird es auf _ungültig_ gesetzt.

Auch wenn das `lang`-Attribut gesetzt ist, kann es möglicherweise nicht berücksichtigt werden, da das `xml:lang`-Attribut Vorrang hat.

Für die CSS-Pseudoklasse {{cssxref(":lang")}} sind zwei ungültige Sprachbezeichnungen unterschiedlich, wenn ihre Namen unterschiedlich sind. Während `:lang(es)` sowohl `lang="es-ES"` als auch `lang="es-419"` entspricht, würde `:lang(xyzzy)` _nicht_ `lang="xyzzy-Zorp!"` entsprechen.

## Sprach-Tagsyntax

Die vollständige BCP47-Syntax ist detailliert genug, um äußerst spezifische Sprachdialekte zu kennzeichnen, aber die meisten Anwendungen sind viel einfacher.

Ein Sprach-Tag besteht aus durch Bindestriche getrennten _Sprachuntertags_, wobei jeder Untertag eine bestimmte Eigenschaft der Sprache angibt. Die 3 gebräuchlichsten Untertags sind:

- Sprachuntertag
  - : Erforderlich. Ein 2- oder 3-Zeichen-Code, der die grundlegende Sprache definiert und typischerweise in Kleinbuchstaben geschrieben wird. Beispielsweise ist der Sprachcode für Englisch `en` und der Code für Badeshi ist `bdz`.
- Schriftuntertag
  - : Optional. Dieser Untertag definiert das Schriftsystem, das für die Sprache verwendet wird, und besteht immer aus 4 Zeichen, wobei der erste Buchstabe großgeschrieben ist. Zum Beispiel ist Französisch in Braille `fr-Brai` und `ja-Kana` ist Japanisch, geschrieben mit dem Katakana-Alphabet. Wenn die Sprache auf eine sehr typische Weise geschrieben ist, wie Englisch im lateinischen Alphabet, besteht keine Notwendigkeit, diesen Untertag zu verwenden.
- Regionsuntertag
  - : Optional. Dieser Untertag definiert einen Dialekt der Basissprache aus einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder aus drei Zahlen, die einem Nicht-Länderbereich entsprechen. Beispielsweise steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` für Spanisch, wie es in Mittelamerika gesprochen wird. "Internationales Spanisch" wäre einfach `es`.

Der Schriftuntertag geht dem Regionsuntertag voraus, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Weißrussland gesprochen wird.

Um die richtigen Untertag-Codes für eine Sprache zu finden, probieren Sie [the Language Subtag Lookup](https://r12a.github.io/app-subtags/).

## Barrierefreiheit

Das WCAG-Erfolgskriterium 3.1.1 **erfordert**, dass eine Seitensprache in einer Weise spezifiziert wird, die 'programmatisch bestimmt' werden kann (d.h. über das **`lang`**-Attribut).

Das WCAG-Erfolgskriterium 3.1.2 erfordert, dass Seiten mit **Teilen** in verschiedenen Sprachen auch die Sprachen dieser Teile spezifiziert haben. Auch hier ist das **`lang`**-Attribut der korrekte Mechanismus hierfür.

Der Zweck dieser Anforderungen besteht hauptsächlich darin, unterstützenden Technologien wie Bildschirmlesegeräten zu ermöglichen, die korrekte Aussprache aufzurufen.

Beispielsweise enthält das Sprachmenü auf dieser Seite (MDN) für jeden Eintrag ein **`lang`**-Attribut:

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

Wenn ein Element kein `lang`-Attribut hat, erbt es den `lang`-Wert, der auf seinem {{Glossary("Node/DOM", "übergeordneten Knoten")}} gesetzt ist, welcher wiederum von seinem übergeordneten Knoten erben kann, und so weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Content-Language` HTTP Header](/de/docs/Web/HTTP/Reference/Headers/Content-Language)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
