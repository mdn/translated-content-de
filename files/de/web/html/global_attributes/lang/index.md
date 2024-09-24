---
title: lang
slug: Web/HTML/Global_attributes/lang
l10n:
  sourceCommit: 9d76a1d4601c8e0042732899a99b6fecde2c919d
---

{{HTMLSidebar("Global_attributes")}}

Das **`lang`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) hilft dabei, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente geschrieben sind, oder die Sprache, in der die bearbeitbaren Elemente vom Benutzer geschrieben werden sollten. Das Attribut enthält ein einzelnes "Sprach-Tag" im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist.

> [!NOTE]
> Der Standardwert von `lang` ist der leere String, was bedeutet, dass die Sprache unbekannt ist. Daher wird empfohlen, immer einen geeigneten Wert für dieses Attribut anzugeben.

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

Wenn der Attributwert der _leere String_ (`lang=""`) ist, wird die Sprache auf _unbekannt_ gesetzt; wenn das Sprach-Tag gemäß BCP47 nicht gültig ist, wird es auf _ungültig_ gesetzt.

Selbst wenn das **lang**-Attribut gesetzt ist, könnte es nicht berücksichtigt werden, da das [**xml:lang**](/de/docs/Web/HTML/Global_attributes#lang) Attribut Vorrang hat.

Für die CSS-Selektor-Pseudoklasse {{cssxref(":lang")}} sind zwei ungültige Sprachbezeichnungen unterschiedlich, wenn ihre Bezeichnungen unterschiedlich sind. Während `:lang(es)` sowohl `lang="es-ES"` als auch `lang="es-419"` entspricht, würde `:lang(xyzzy)` _nicht_ `lang="xyzzy-Zorp!"` entsprechen.

## Sprach-Tag-Syntax

Die vollständige BCP47-Syntax ist tiefgreifend genug, um extrem spezifische Sprachdialekte zu kennzeichnen, aber die meisten Anwendungen sind viel einfacher.

Ein Sprach-Tag besteht aus durch Bindestriche getrennten _Sprach-Untertags_, wobei jeder Untertag eine bestimmte Eigenschaft der Sprache angibt. Die drei häufigsten Untertags sind:

- Sprach-Untertag
  - : Erforderlich. Ein zwei- oder dreistelliger Code, der die Grundsprache definiert, typischerweise in Kleinbuchstaben geschrieben. Zum Beispiel ist der Sprachcode für Englisch `en`, und der Code für Badeshi ist `bdz`.
- Schreibweisen-Untertag
  - : Optional. Dieser Untertag definiert das Schriftsystem, das für die Sprache verwendet wird, und besteht immer aus 4 Zeichen, wobei der erste Buchstabe großgeschrieben ist. Zum Beispiel ist Französisch in Braille `fr-Brai` und `ja-Kana` ist Japanisch, geschrieben mit dem Katakana-Alphabet. Wenn die Sprache auf sehr typische Weise geschrieben wird, wie Englisch im lateinischen Alphabet, ist es nicht notwendig, diesen Untertag zu verwenden.
- Regions-Untertag
  - : Optional. Dieser Untertag definiert einen Dialekt der Basissprache aus einem bestimmten Ort und besteht entweder aus 2 Buchstaben in GROSSBUCHSTABEN, die einem Ländercode entsprechen, oder aus 3 Zahlen, die einem nicht-landesspezifischen Gebiet entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` ist Spanisch, wie es in Mittelamerika gesprochen wird. „Internationales Spanisch“ wäre einfach `es`.

Der Schreibweisen-Untertag steht vor dem Regions-Untertag, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Belarus gesprochen wird.

Um die korrekten Untertag-Codes für eine Sprache zu finden, versuchen Sie es mit dem [Language Subtag Lookup](https://r12a.github.io/app-subtags/).

## Zugänglichkeitsaspekte

WCAG-Erfolgskriterium 3.1.1 **erfordert**, dass eine Seiten-Sprache auf eine Weise angegeben wird, die "programmatisch bestimmt" werden kann (d. h. über das **`lang`**-Attribut).

WCAG-Erfolgskriterium 3.1.2 erfordert, dass Seiten mit **Teilen** in unterschiedlichen Sprachen auch die Sprachen dieser Teile spezifiziert haben. Auch hier ist das **`lang`**-Attribut der korrekte Mechanismus dafür.

Der Zweck dieser Anforderungen besteht hauptsächlich darin, Unterstützungstechnologien wie Bildschirmlesegeräte zu ermöglichen, die korrekte Aussprache zu verwenden.

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
      <a href="/ca/docs/Web/HTML/Global_attributes/lang" title="Catalan">
        <bdi>Català</bdi>
      </a>
    </li>
    <li lang="de" role="menuitem">
      <a href="/de/docs/Web/HTML/Globale_Attribute/lang" title="German">
        <bdi>Deutsch</bdi>
      </a>
    </li>
    <li lang="es" role="menuitem">
      <a href="/es/docs/Web/HTML/Atributos_Globales/lang" title="Spanish">
        <bdi>Español</bdi>
      </a>
    </li>
    <li lang="fr" role="menuitem">
      <a href="/fr/docs/Web/HTML/Attributs_universels/lang" title="French">
        <bdi>Français</bdi>
      </a>
    </li>
    <li lang="ja" role="menuitem">
      <a href="/ja/docs/Web/HTML/Global_attributes/lang" title="Japanese">
        <bdi>日本語</bdi>
      </a>
    </li>
    <li lang="ko" role="menuitem">
      <a href="/ko/docs/Web/HTML/Global_attributes/lang" title="Korean">
        <bdi>한국어</bdi>
      </a>
    </li>
    <li lang="pt-BR" role="menuitem">
      <a
        href="/pt-BR/docs/Web/HTML/Global_attributes/lang"
        title="Portuguese (Brazilian)">
        <bdi>Português (do&nbsp;Brasil)</bdi>
      </a>
    </li>
    <li lang="ru" role="menuitem">
      <a href="/ru/docs/Web/HTML/Global_attributes/lang" title="Russian">
        <bdi>Русский</bdi>
      </a>
    </li>
    <li lang="uk" role="menuitem">
      <a
        href="/uk/docs/Web/HTML/%D0%97%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D1%96_%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%B8/lang"
        title="Ukrainian">
        <bdi>Українська</bdi>
      </a>
    </li>
    <li lang="zh-Hans" role="menuitem">
      <a
        href="/zh-CN/docs/Web/HTML/Global_attributes/lang"
        title="Chinese (Simplified)">
        <bdi>中文 (简体)</bdi>
      </a>
    </li>
    <li>
      <a
        href="/de/docs/Web/HTML/Global_attributes/lang$locales"
        rel="nofollow"
        id="translations-add">
        Add a translation
      </a>
    </li>
  </ul>
</div>
```

## Vererbung

Wenn ein Element kein `lang`-Attribut hat, erbt es den `lang`-Wert von seinem [übergeordneten Knoten](/de/docs/Glossary/Node/DOM), der wiederum diesen Wert von seinem übergeordneten Knoten erben kann, und so weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`Content-Language` HTTP-Header](/de/docs/Web/HTTP/Headers/Content-Language)
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes#translate) Attribut
