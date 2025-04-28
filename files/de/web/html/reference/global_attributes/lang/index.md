---
title: lang
slug: Web/HTML/Reference/Global_attributes/lang
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

{{HTMLSidebar("Global_attributes")}}

Das **`lang`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht editierbare Elemente geschrieben sind, oder die Sprache, in der die editierbaren Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält einen einzelnen "Sprachtag" im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist.

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

Wenn der Attributwert der _leere String_ (`lang=""`) ist, wird die Sprache auf _unbekannt_ gesetzt; wenn der Sprachtag gemäß BCP47 ungültig ist, wird er auf _ungültig_ gesetzt.

Selbst wenn das `lang`-Attribut gesetzt ist, muss es möglicherweise nicht berücksichtigt werden, da das `xml:lang`-Attribut Vorrang hat.

Für die CSS-Pseudoklasse {{cssxref(":lang")}} sind zwei ungültige Sprachbezeichnungen unterschiedlich, wenn ihre Namen unterschiedlich sind. So passt `:lang(es)` sowohl zu `lang="es-ES"` als auch zu `lang="es-419"`, während `:lang(xyzzy)` _nicht_ zu `lang="xyzzy-Zorp!"` passen würde.

## Sprachtag-Syntax

Die vollständige BCP47-Syntax ist tiefgehend genug, um extrem spezifische Sprachdialekte zu kennzeichnen, aber die meisten Anwendungen sind viel einfacher.

Ein Sprachtag besteht aus mit Bindestrich getrennten _Sprachuntertags_, wobei jeder Untertag eine bestimmte Eigenschaft der Sprache angibt. Die 3 häufigsten Untertags sind:

- Sprachuntertag
  - : Erforderlich. Ein 2- oder 3-Zeichen-Code, der die grundlegende Sprache definiert und typischerweise in Kleinbuchstaben geschrieben wird. Zum Beispiel ist der Sprachcode für Englisch `en` und der Code für Badeshi ist `bdz`.
- Schriftuntertag
  - : Optional. Dieser Untertag definiert das Schriftsystem, das für die Sprache verwendet wird, und ist immer 4 Zeichen lang, wobei der erste Buchstabe groß geschrieben wird. Zum Beispiel ist Französisch in Braille-Schrift `fr-Brai` und `ja-Kana` ist Japanisch, geschrieben mit dem Katakana-Alphabet. Wenn die Sprache auf eine sehr typische Weise geschrieben wird, wie Englisch im lateinischen Alphabet, ist es nicht nötig, diesen Untertag zu verwenden.
- Regionsuntertag
  - : Optional. Dieser Untertag definiert einen Dialekt der Grundsprache aus einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder aus drei Zahlen, die einem Bereich ohne Land entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` ist Spanisch, wie es in Mittelamerika gesprochen wird. "Internationales Spanisch" wäre einfach `es`.

Der Schriftuntertag geht dem Regionsuntertag voraus, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Belarus gesprochen wird.

Um die korrekten Untertag-Codes für eine Sprache zu finden, versuchen Sie [die Sprachuntertag-Suche](https://r12a.github.io/app-subtags/).

## Barrierefreiheitsbedenken

Das WCAG-Erfolgskriterium 3.1.1 **erfordert**, dass eine Seitensprache so spezifiziert ist, dass sie 'programmatisch ermittelt' werden kann (d.h. über das **`lang`**-Attribut).

Das WCAG-Erfolgskriterium 3.1.2 erfordert, dass Seiten mit **Teilen** in verschiedenen Sprachen auch die Sprachen dieser Teile spezifiziert haben. Auch hier ist das **`lang`**-Attribut der richtige Mechanismus dafür.

Der Zweck dieser Anforderungen ist es in erster Linie, unterstützenden Technologien wie Screenreadern zu ermöglichen, die korrekte Aussprache aufzurufen.

Zum Beispiel enthält das Sprachmenü auf dieser Seite (MDN) ein **`lang`**-Attribut für jeden Eintrag:

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
    <li lang="ca" role="menuitem">
      <a
        href="/ca/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Catalan">
        <bdi>Català</bdi>
      </a>
    </li>
    <li lang="de" role="menuitem">
      <a
        href="/de/docs/Web/HTML/Reference/Global_attributes/lang"
        title="German">
        <bdi>Deutsch</bdi>
      </a>
    </li>
    <li lang="es" role="menuitem">
      <a
        href="/es/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Spanish">
        <bdi>Español</bdi>
      </a>
    </li>
    <li lang="fr" role="menuitem">
      <a
        href="/fr/docs/Web/HTML/Reference/Global_attributes/lang"
        title="French">
        <bdi>Français</bdi>
      </a>
    </li>
    <li lang="ja" role="menuitem">
      <a
        href="/ja/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Japanese">
        <bdi>日本語</bdi>
      </a>
    </li>
    <li lang="ko" role="menuitem">
      <a
        href="/ko/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Korean">
        <bdi>한국어</bdi>
      </a>
    </li>
    <li lang="pt-BR" role="menuitem">
      <a
        href="/pt-BR/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Portuguese (Brazilian)">
        <bdi>Português (do&nbsp;Brasil)</bdi>
      </a>
    </li>
    <li lang="ru" role="menuitem">
      <a
        href="/ru/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Russian">
        <bdi>Русский</bdi>
      </a>
    </li>
    <li lang="uk" role="menuitem">
      <a
        href="/uk/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Ukrainian">
        <bdi>Українська</bdi>
      </a>
    </li>
    <li lang="zh-Hans" role="menuitem">
      <a
        href="/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Chinese (Simplified)">
        <bdi>中文 (简体)</bdi>
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

Wenn ein Element kein `lang`-Attribut hat, erbt es den `lang`-Wert, der auf seinem {{Glossary("Node/DOM", "übergeordneten Knoten")}} festgelegt ist, welcher wiederum von seinem übergeordneten Knoten erben kann, und so weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Content-Language` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Content-Language)
- HTML [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) Attribut
