---
title: In einem WebIDL-Dokument enthaltene Informationen
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{MDNSidebar}}

Beim Schreiben von Dokumentationen zu einer API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden soll, sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in die Browser integriert wurde. WebIDL-Dateien sind eine sehr komprimierte Möglichkeit, viele, aber nicht alle Informationen über die API bereitzustellen. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist dafür konzipiert, APIs zu beschreiben. In der weiteren Welt der Informatik gibt es verschiedene Arten von IDL. In der Welt der Browser wird die IDL, die wir verwenden, _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: die, die in der WebIDL-Spezifikation definiert sind, und die, die in Browsern implementiert sind. Die Spezifikation ist die kanonische Referenz, und das Browser-WebIDL beschreibt, was in einem bestimmten Browser tatsächlich implementiert wurde, und enthält zusätzliche Dinge wie Annotationen, Informationen über nicht standardisierte Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo Sie WebIDL-Dateien finden

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Möglichkeit, eine präzise Definition zu vermitteln. Diese beschreiben die Syntax der API. Obwohl sie die kanonische Referenz sind, sollten wir bedenken, dass sie von der tatsächlichen Implementierung abweichen können. Auf MDN möchten wir praktisch sein und dokumentieren, was die Web-Plattform wirklich ist, nicht, was sie idealerweise sein sollte. Überprüfen Sie daher, was dort mit Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Widersprüche entdecken).
- Drei Browser-Engines verwenden (modifizierte) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge verwendeten es intern, aber diese sind leider nicht öffentlich.

  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis gruppiert: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellcodebaum, aber sie sind nicht WebIDL, sodass Sie sie ignorieren können. Ältere Versionen von Gecko haben einige ihrer WebIDL-Dateien etwas verstreut und verwenden möglicherweise sogar Mozillas IDL anstelle von WebIDL, um einige Web-Schnittstellen zu beschreiben, aber dies wird bei keinem aktuellen Gecko-Code ein Problem darstellen.
  - Für Chromium befinden sie sich an zwei Stellen, beide Unterverzeichnisse des Quellcodeverzeichnisses [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Der Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, sodass Sie etwas mehr graben müssen: z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so konzipiert, dass es erweiterbar ist, um mehr Informationen zu vermitteln, und Browser-Anbieter haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple auch eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt verfügbar gemacht.

> [!NOTE]
> Wir beschreiben hier nur die Untermenge von WebIDL, die beim Erstellen von Dokumentationen am nützlichsten ist. Es gibt viele weitere Annotationen, die für Implementierer nützlich sind; konsultieren Sie die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die allgemeine API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist der String, der nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, die jeden Konstruktor, jede Eigenschaft und jede Methode auflistet, die dafür definiert sind.

### Vererbungskette

Das Elternteil, falls vorhanden, einer bestimmten Schnittstelle wird nach dem Schnittstellennamen definiert, dem ein Doppelpunkt (`':'`) folgt. Es kann nur ein Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste (mit dem \\{{APIRef}} Makro) aufgelistet. Es kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um die Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Seit September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Anschließend verwenden Sie das Schlüsselwort `includes`, um zu sagen, dass die in einem Mixin definierten Eigenschaften auf einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins enthalten. Sie unterstützen jedoch Partials, sodass Sie Dinge wie dies sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke versteckt MDN Mixins. Sie sind abstrakte und nur in Spezifikationen vorkommende Konstrukte.
Sie können sie in der Browser-Konsole nicht sehen, und es ist nützlicher zu wissen, auf welchen echten Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie auf ein Mixin in IDL stoßen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, anstatt `HTMLHyperlinkElementUtils` zu dokumentieren,
werden die Dokumentationen zu den konkreten Schnittstellen hinzugefügt, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Sehen Sie sich die folgenden beiden Seiten an, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenerichtlinien für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie an einigen Stellen immer noch antreffen könnten, werden Mixins mit der Annotation `[NoInterfaceObject]` vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mithilfe des Schlüsselworts `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Fenster und Workern

Die Verfügbarkeit in Web-Workern (jeglicher Art) und im Fensterbereich wird mit einer Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation gilt für die partielle Schnittstelle, mit der sie aufgelistet ist.

```webidl
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

In diesem Fall ist `Performance.now()` im `Window`-Bereich und in jedem Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Worker verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die partielle Schnittstelle ist im globalen Umfang des [`Window`](/de/docs/Web/API/Window) verfügbar.
- `Worker`
  - : Die partielle Schnittstelle ist für jeden Worker verfügbar, d.h. wenn der globale Umfang ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für den `ChromeWorker` verfügbar, aber wir dokumentieren das nicht, da sie nicht im Web sichtbar sind und nur intern in Firefox verwendet werden.)
- `DedicatedWorker`
  - : Die partielle Schnittstelle ist nur für das [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die partielle Schnittstelle ist nur für das [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die partielle Schnittstelle ist nur für das [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer Wert ist möglich, wie `System`, aber dies hat eine [spezielle Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Annotation haben. Das bedeutet, wenn ein Objekt dieses Typs als globaler Umfang verwendet wird, ist jede Schnittstelle, Eigenschaft oder Methode, die `xyz` als Wert von `[Exposed]` hat, verfügbar.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass wenn der globale Umfang vom Typ `DedicatedWorkerGlobalScope` ist, wenn wir also in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die für `Worker` oder `DedicatedWorker` verfügbar gemacht wird – unter Verwendung der `[Exposed]`-Annotation –, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer partiellen Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und ihrer Methoden, durch eine Präferenz (gewöhnlich "pref" genannt) gesteuert werden. Dies ist auch im WebIDL vermerkt.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis`-Schnittstelle und ihre Eigenschaften (die vollständige Auflistung hat mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein.)

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen können möglicherweise nur im internen Systemcode des Browsers oder Chromecode verfügbar sein. Um dies anzuzeigen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft propName im folgenden Beispiel nur über den Chromecode aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft am Vorhandensein des Schlüsselworts `attribute` erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten werden wir uns auf sie als `HTMLMediaElement.error` beziehen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass sie den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies vorkommen kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ vorangestellt sein, einer Zeichenkette, die in eckigen Klammern eingeschlossen ist (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute weisen auf besondere Verhaltensweisen hin, die im Text beschrieben werden müssen. Hier ist eine Liste der standardmäßigen erweiterten Attribute von Typen und der Ergänzung, die gemacht werden muss:

- `[LegacyNullToEmptyString]`

  - : Der `null`-Wert wird auf nicht standardmäßige Weise in einen String umgewandelt. Der Standardweg besteht darin, ihn in den `"null"`-String umzuwandeln, aber in diesem Fall wird er in `""` umgewandelt.

    Fügen Sie den folgenden Satz am Ende des Abschnitts _Wert_ des Artikels hinzu:

    _Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.innerHTML = null` dem `elt.innerHTML = ""` entspricht._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen auf die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Dies muss folgendermaßen als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das Makro \\{{ReadOnlyInline}} neben seinem Definitionsterm hinzugefügt wird.
- Im ersten Satz auf seiner eigenen Seite, indem die Beschreibung mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_ beginnt.
- Indem die Beschreibung in der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als "Rückgabe" eines Wertes beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Setzen eines neuen Wertes zu einer ausgelösten Ausnahme führen. Dies wird mit der Annotation `[SetterThrows]` gekennzeichnet. Wenn dies passiert, muss der Abschnitt "Syntax" der Eigenschaftenseite einen Unterabschnitt "Ausnahmen" haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als textliche Informationen in der Spezifikation dieser API aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern von den JavaScript-Bindungen definiert werden. [Versuche, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) festzulegen, führen zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist jedoch nur implizit im WebIDL-Dokument markiert.

Es ist selten, dass Getter Ausnahmen auslösen, obwohl es in einigen Fällen vorkommt. In diesem Fall wird die Annotation `[GetterThrows]` verwendet. Hier muss der Abschnitt "Syntax" der Eigenschaftenseite ebenfalls einen Unterabschnitt "Ausnahmen" haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen auslösen

Wenn die Semantik von WebIDL nicht eingehalten wird, wird oft eine Ausnahme ausgelöst, selbst ohne dass `[SetterThrows]` oder `[GetterThrows]` gesetzt ist. Zum Beispiel, im strikten Modus, wenn wir versuchen, eine schreibgeschützte Eigenschaft auf einen neuen Wert zu setzen, d.h. ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im strikten Modus eine Ausnahme auslösen.

Meistens aus Kompatibilitätsgründen ist dieses Verhalten manchmal unerwünscht. Um dies zu verhindern, indem ein No-Op-Setter erstellt wird (d.h. indem jeder Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert wird), kann die Annotation `[LenientSetter]` verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird dem Beschreibungsabschnitt der Eigenschaft ein zusätzlicher Satz hinzugefügt. Zum Beispiel:

_Obwohl diese Eigenschaft schreibgeschützt ist, wird keine Ausnahme ausgelöst, wenn sie geändert wird (sogar im strikten Modus); der Setter ist keine Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz zu einem internen Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (was ein IDL-`DOMString` oder anderes ist), {{jsxref("Number")}} (was ein IDL-`byte`, `octet`, `unsigned int` oder anderes ist), und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes darüber angemerkt werden (es ist das natürliche Verhalten, das ein JavaScript-Entwickler erwartet).

Für Schnittstellenobjekte ist es standardmäßig, eine _Referenz_ zum internen Objekt zurückzugeben. Dies muss sowohl in der Kurzbeschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können jedoch geändert werden, selbst wenn sie in der entsprechenden Schnittstelle als schreibgeschützt gekennzeichnet sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL mit der Annotation `[NewObject]` gekennzeichnet.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Das Ändern davon ändert nicht den internen Wert, und eine Änderung des internen Werts wirkt sich nicht auf jede Objektinstanz aus. In der Dokumentation markieren wir dies durch die Verwendung des Adjektivs _neu_ neben dem Objekt:

_Die **`HTMLMediaElement.buffered`**-Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz zu einem Sammelobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir es explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu kennzeichnen, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollection` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch auf der Unterseite.

Zum Beispiel:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Eigenschaften in Workern wird ebenfalls im WebIDL gefunden. Für eine Eigenschaft ist der Standard dieselbe Verfügbarkeit wie die `interface` (d.h. verfügbar für [`Window`](/de/docs/Web/API/Window)-Kontext nur, wenn nichts Besonderes markiert ist) oder als die `partial interface`, in der es definiert wird.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob es in Web-Workern verfügbar ist oder nicht, unmittelbar vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies ist auch im WebIDL vermerkt.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

## Methoden

Sie können die Definition einer Methode am Vorhandensein von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir beziehen uns in den Dokumenten auf sie als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt), da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode werden im Syntax-Abschnitt der Methoden-Unterseite aufgelistet. Sie sind im WebIDL in der Reihenfolge aufgelistet, in den Klammern, als durch Kommas getrennte Liste. Jeder Parameter hat einen Namen (wie oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist.) Wenn mit `optional` gekennzeichnet, ist der Parameter optional und muss beim Auflisten im Syntax-Abschnitt das \\{{OptionalInline}}-Flag enthalten sein. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) angegeben.

Parametertypen können spezielle Verhaltensweisen haben, die durch erweiterte Attribute beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzung, die Sie im Text vornehmen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewerts wird vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies passieren kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet das, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` liest, sollte der Abschnitt _Rückgabewert_ in den Dokumenten einfach "None (\{{jsxref("undefined")}})." lauten.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der Annotation `[Throws]` markiert. Wenn dies passiert, muss der Abschnitt "Syntax" der Methoden-Seite einen Unterabschnitt "Ausnahmen" haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als textliche Informationen in der Spezifikation dieser API aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, aber von den JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration), der einer JavaScript {{jsxref('String')}} als Parameter zugeordnet ist, festzulegen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, aber nur implizit im WebIDL-Dokument markiert.

Sehen Sie sich einen dieser [_Exceptions_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Methoden in Workern wird ebenfalls im WebIDL gefunden. Für eine Methode ist der Standard dieselbe Verfügbarkeit wie die `interface` (d.h. verfügbar für [`Window`](/de/docs/Web/API/Window)-Kontext nur, wenn nichts Besonderes markiert ist) oder als die `partial interface`, in der sie definiert wird.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, unmittelbar vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies ist auch im WebIDL vermerkt.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die Methode `addTextTrack()`.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

## Spezielle Methoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgelistet, sondern stattdessen als spezielle Schlüsselwörter, die in bestimmte Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein Objekt, das auf einer Schnittstelle basiert, in Kontexten, die einen String erwarten, aufgelöst wird. (Siehe den Abschnitt [Stringifiers](#stringifiers).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und wie folgt definiert:

```webidl
stringifier;
```

Die `toString()`-Methode wird genauso wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString)).

Ein Jsonifier wird auf `toJSON()` abgebildet und wie folgt definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird genauso wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)).

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht standardmäßige, wahrscheinlich frühe Vorschlag `jsonifier` findet sich in mozilla-central.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterabel_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei Arten der Iteration: den _Werte-Iterator_ und den _Paar-Iterator._

#### Werte-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indizes zurückgibt (die `unsigned long` sind).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt.
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt, die seine Indizes sind (die `unsigned long` sind). Im Falle von Werte-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung hinzu.

Die zu iterierenden Werte können auf eine der folgenden Arten definiert werden:

- Im WebIDL-Dokument, mit der Notation `iterable<valueType>`. Zum Beispiel, siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit im WebIDL-Dokument, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angegeben, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` enthält.
- Außerhalb des WebIDL-Dokuments, im begleitenden Prosatext. Ein solcher Prosatext wird typischerweise in der Spezifikation gefunden und beginnt normalerweise mit: _"The [values to iterate over](https://webidl.spec.whatwg.org/#dfn-value-iterator)..."_

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das sind die Wertepaarungen. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Wertepaarungen zurückgibt. Zum Beispiel siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung hinzu. z.B. [`FormData`](/de/docs/Web/API/FormData).

Die zu iterierenden Wertepaarungen können auf eine der folgenden Arten definiert werden:

- Im WebIDL-Dokument, mit der Notation `iterable<keyType, valueType>`. Zum Beispiel siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb des WebIDL-Dokuments, im begleitenden Prosatext. Ein solcher Prosatext wird typischerweise in der Spezifikation gefunden und beginnt normalerweise mit: _"The [value pairs to iterate over](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)..."_

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-ähnlich_ definiert werden, was bedeutet, dass sie eine _geordnete Menge von Werten_ darstellt und die folgenden Methoden hat: `entries()`, `keys()`, `values()`, `forEach()`, und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Das Set-ähnliche kann readonly sein oder nicht. Wenn nicht readonly, werden auch die Methoden zur Modifikation des Sets implementiert: `add()`, `clear()`, und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indizes zurückgibt. Zum Beispiel siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die set-ähnliche Deklaration nicht von readonly, sondern nicht-readonly, vorangestellt wird, werden auch die folgenden Methoden generiert:

- `add()`, das einen Eintrag hinzufügt. z.B. die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()`, das die set-ähnliche Struktur leert. z.B. die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()`, das einen Eintrag entfernt. z.B. die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche set-ähnliche Schnittstelle erlaubt auch die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`.

## Besondere Verhaltensweisen

Einige IDL-Mitglieder zeigen spezielle Verhaltensweisen an, die auf den entsprechenden Seiten vermerkt werden sollten.

### Stringifiers

Zusätzlich zur Hinzufügung der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifiers auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen anderen String als den Standard zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts.) Genaukeitsweise hängt es davon ab, wie es in der IDL spezifiziert ist. Unabhängig davon, wie das nicht standardmäßige Verhalten beschrieben werden sollte, sollte es auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` zusammen mit einem Attributnamen verwendet wird, hat der Hinweis auf den Objektnamen denselben Effekt wie der Hinweis auf den Attributnamen. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Codezeilen unten gleichwertig. Das Verhalten sollte auf der Eigenschaftenseite zusätzlich zur Schnittstellenseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das Schlüsselwort `stringifier` alleine verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten wird im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was ein Schnittstellenverweis tatsächlich tut, konsultieren Sie die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um deren Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL etwas verborgen: Sie werden als Annotationen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer bestimmten Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird unter Verwendung der `Constructor`-Annotation auf der Schnittstelle definiert. Es kann Klammern und eine Liste von Parametern oder nicht (wie im obigen Beispiel) geben. Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das obige unter dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` gegeben.

Ein weiteres Beispiel für einen unbenannten Konstruktor, mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere unbenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Alle Syntax wird auf einer einzigen Unterseite dokumentiert.

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### Benannte Konstruktoren

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als den seiner Schnittstelle hat. Zum Beispiel erzeugt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL mit der `NamedConstructor`-Annotation auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parametern innerhalb der Klammern im gleichen Format, wie Sie bei Methoden sehen werden.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, aber dies ist extrem selten; in einem solchen Fall enthalten wir eine Unterseite pro Namen.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Schnittstellenattribute mehr:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifkationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierte Rückgabetypen, die folgendermaßen geschrieben wird:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Das bedeutet, dass erweiterte Attribute jetzt auf dem Konstruktor angegeben werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren eine Ausnahme auslösen. Wenn ein Konstruktor eine Ausnahme auslöst, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, also werden Sie wahrscheinlich sowohl die alte als auch die neue in freier Wildbahn antreffen. Wir werden daher beide Syntaxarten hier weiterhin behandeln.

### Verfügbarkeit in Workern

Konstruktoren haben dieselbe Verfügbarkeit wie die Schnittstelle, oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Information auf die gleiche Weise wie für eine Methode.

### Präferenzen

Konstruktoren werden durch dieselbe Präferenz gesteuert wie die Schnittstelle, oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Information auf die gleiche Weise wie für eine Methode.
