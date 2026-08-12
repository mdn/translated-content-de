---
title: Schriften für MathML
short-title: Fonts
slug: Web/MathML/Guides/Fonts
l10n:
  sourceCommit: 4d1121972ed8c33a0d539c72ef1ecccb068343ed
---

Für eine gute mathematische Darstellung sind Schriften mit angemessener Unicode-Abdeckung und Open Font Format-Funktionen erforderlich. Diese Seite beschreibt, wie Benutzer solche Mathe-Schriften installieren können, um MathML in Browsern richtig anzuzeigen.

## Installationsanweisungen

Als Faustregel wird empfohlen, sowohl _Latin Modern Math_ (welches den [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern)-Stil verwendet, der für mathematische Formeln beliebt ist) als auch _STIX Two Math_ (das eine große Unicode-Abdeckung für wissenschaftliche Zeichen hat) zu installieren. In den nächsten Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Schriften auf verschiedenen Betriebssystemen.

### Windows

Installieren Sie die Schriften _Latin Modern Math_ und _STIX Two Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, gehen Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie eine `latinmodern-math`-Schriftdatei.
3. Öffnen Sie die `latinmodern-math`-Schriftdatei und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/v2.13b171/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das `static_otf.zip` ZIP-Archiv und gehen Sie in das Verzeichnis `static_otf`. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular`-Datei.
6. Öffnen Sie die `STIXTwoMath-Regular`-Datei und klicken Sie auf die Schaltfläche **Installieren**. Bei Bedarf können Sie dasselbe auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> _Cambria Math_ ist standardmäßig auf Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie die Schrift _Latin Modern Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Entpacken Sie das ZIP-Archiv, gehen Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie eine `latinmodern-math`-Schriftdatei.
3. Doppelklicken Sie auf die `latinmodern-math`-Schriftdatei und klicken Sie auf die Schaltfläche **Schrift installieren** im geöffneten Fenster.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die folgenden Schritte überspringen.

Installieren Sie die Schrift _STIX Two Math_ wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/v2.13b171/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das `static_otf.zip` ZIP-Archiv und gehen Sie in das Verzeichnis `static_otf`. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular.otf`-Datei.
3. Öffnen Sie die `STIXTwoMath-Regular.otf`-Datei und klicken Sie auf die Schaltfläche **Schrift installieren** im geöffneten Fenster. Bei Bedarf können Sie dasselbe auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser sie verwenden können, wird dringend empfohlen, die obigen Anweisungen für eine optimale mathematische Darstellung zu befolgen.

### Linux

Nachfolgend finden Sie Befehle, die Sie auf beliebten Linux-Distributionen ausführen können, um Matheschriften über Ihren Paketmanager zu installieren. Alternative Ansätze werden ebenfalls bereitgestellt, falls Ihre Linux-Distribution keine speziellen Pakete für diese Schriften bietet.

#### Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern
```

> [!NOTE]
> Das Debian-Paket `fonts-stix` installiert STIX 1.x-Schriften, nicht _STIX Two Math_.

#### Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### OpenSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Wenn Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_- und _STIX_-Schriften bereitstellt, ziehen Sie stattdessen die Installation der `texlive`-Pakete in Betracht, die die Schriften _Latin Modern Math_ und _XITS_ enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Es ist jedoch wahrscheinlich notwendig sicherzustellen, dass diese Schriften Ihrem System bekannt sind. Fügen Sie eine Schriftkonfigurationsdatei `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype`-Verzeichnis von TeXLive verweist, z.B.:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Fügen Sie schließlich diese Konfigurationsdatei der Systemschriftliste hinzu und regenerieren Sie den Fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Wenn auf Ihren Linux-Distributionen keine Pakete verfügbar sind oder Sie einfach Upstream-Pakete installieren möchten, versuchen Sie Folgendes:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/v2.13b171/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein Verzeichnis `~/.fonts`, falls es nicht bereits existiert, und platzieren Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` darin.
3. Führen Sie `fc-cache -f` aus, um den Fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [mathematische Layouts](https://github.com/notofonts/math/blob/main/documentation/building-math-fonts/index.md).

### Andere Systeme

Auf anderen Systemen erwägen Sie, eine [Schrift mit einer MATH-Tabelle](#schriften_mit_einer_math-tabelle) über Ihren Paketmanager zu installieren. Beachten Sie, dass diese Schriften im Allgemeinen mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, aber Sie müssen möglicherweise spezifische Anweisungen befolgen, damit Ihr System die Schriften erkennt. Als letzter Ausweg installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweiterte Einrichtung

In den folgenden Abschnitten finden Sie weitere nützliche Tipps für die Installation und Konfiguration von Schriften für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben sehr wenige Schriften geeignete Glyphen für die arabischen mathematischen alphabetischen Symbole. Wenn Sie wahrscheinlich diese Zeichen benötigen, empfehlen wir, die Schriften _XITS_ oder [Amiri](https://aliftype.com/amiri/) zu installieren.

### Installation ohne Administratorrechte

Wenn Sie Schriften auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option, das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) zu verwenden. Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser zwingt, ein CSS-Stylesheet auf jeder besuchten Seite sowie Web-Matheschriften auf allen Seiten mit MathML-Inhalten zu laden.

Eine bessere Alternative auf UNIX-Systemen ist die Installation der OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einem lokalen Schriftverzeichnis und (falls erforderlich) `fc-cache` darauf auszuführen. Auf macOS und Linux sind die Standardpfade jeweils `~/Library/Fonts/` und `~/.fonts`.

### Schriften mit einer MATH-Tabelle

Sie können tatsächlich jede [mathematische OpenType-Schrift](https://fred-wang.github.io/MathFonts/) installieren und sie für das MathML-Rendering verwenden. Einige Browser bieten eine Möglichkeit, die Standardschriftart für MathML im Schriftpräferenzmenü zu konfigurieren. Alternativ können Sie das [MathML Font Settings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
