---
title: lang
slug: Web/HTML/Reference/Global_attributes/lang
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`lang`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) hilft dabei, die Sprache eines Elements festzulegen: die Sprache, in der nicht editierbare Elemente geschrieben sind, oder die Sprache, in der die editierbaren Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein einzelnes "Sprach-Tag" im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist.

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

Wenn der Attributwert der _leere String_ (`lang=""`) ist, wird die Sprache auf _unbekannt_ gesetzt; wenn das Sprach-Tag gemäß BCP47 nicht gültig ist, wird es auf _ungültig_ gesetzt.

Auch wenn das `lang`-Attribut gesetzt ist, könnte es unberücksichtigt bleiben, da das `xml:lang`-Attribut Priorität hat.

Für die CSS-Pseudoklasse {{cssxref(":lang")}} sind zwei ungültige Sprachbezeichnungen verschieden, wenn ihre Namen unterschiedlich sind. Während `:lang(es)` sowohl `lang="es-ES"` als auch `lang="es-419"` entspricht, würde `:lang(xyzzy)` _nicht_ `lang="xyzzy-Zorp!"` entsprechen.

## Sprach-Tag-Syntax

Die vollständige BCP47-Syntax ist ausreichend ausführlich, um extrem spezifische Sprachdialekte zu kennzeichnen, aber der größte Teil der Nutzung ist viel einfacher.

Ein Sprach-Tag besteht aus durch Bindestriche getrennten _Sprachsubtags_, wobei jeder Subtag eine bestimmte Eigenschaft der Sprache angibt. Die 3 häufigsten Subtags sind:

- Sprachsubtag
  - : Erforderlich. Ein 2- oder 3-Zeichen-Code, der die grundlegende Sprache definiert, typischerweise in Kleinbuchstaben geschrieben. Zum Beispiel ist der Sprachcode für Englisch `en`, und der Code für Badeshi ist `bdz`.
- Schreibscript-Subtag
  - : Optional. Dieser Subtag definiert das Schriftsystem, das für die Sprache verwendet wird, und ist immer 4 Zeichen lang, wobei der erste Buchstabe großgeschrieben wird. Zum Beispiel ist Französisch in Brailleschrift `fr-Brai` und `ja-Kana` ist Japanisch, das mit dem Katakana-Alphabet geschrieben ist. Wenn die Sprache auf eine sehr übliche Weise geschrieben wird, wie Englisch im lateinischen Alphabet, besteht keine Notwendigkeit, diesen Subtag zu verwenden.
- Regionssubtag
  - : Optional. Dieser Subtag definiert einen Dialekt der Basissprache von einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder aus drei Zahlen, die einem nicht landesbezogenen Gebiet entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` für Spanisch, wie es in Mittelamerika gesprochen wird. "Internationales Spanisch" wäre einfach `es`.

Der Schreibscript-Subtag geht dem Regionssubtag voraus, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Belarus gesprochen wird.

Um die korrekten Subtag-Codes für eine Sprache zu finden, versuchen Sie [den Language Subtag Lookup](https://r12a.github.io/app-subtags/).

## Barrierefreiheitsbelange

WCAG Erfolgs-Kriterium 3.1.1 **erfordert**, dass eine Seitensprache auf eine Weise angegeben wird, die „programmgesteuert bestimmt“ werden kann (d.h. über das **`lang`**-Attribut).

WCAG Erfolgs-Kriterium 3.1.2 erfordert, dass Seiten mit **Teilen** in verschiedenen Sprachen die Sprachen dieser Teile ebenfalls angegeben haben. Auch hier ist das **`lang`**-Attribut der richtige Mechanismus hierfür.

Der Zweck dieser Anforderungen ist in erster Linie, assistive Technologien wie Bildschirmlesegeräte in die Lage zu versetzen, die korrekte Aussprache anzuwenden.

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
        href="/en-US/docs/Web/HTML/Global_attributes/lang$locales"
        rel="nofollow"
        id="translations-add">
        Add a translation
      </a>
    </li>
  </ul>
</div>
```

## Vererbung

Wenn ein Element kein `lang`-Attribut hat, erbt es den `lang`-Wert von seinem {{Glossary("Node/DOM", "übergeordneten Knoten")}}, der diesen wiederum von seinem Elternknoten erben kann, und so weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Content-Language` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Content-Language)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
